import React, { useState } from "react";
import { client } from "../client";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import LinearIndeterminate from "./ProgressLoader";
import { useNavigate } from "react-router-dom";
import ColorAlerts from "./Alert";

const CreatePin = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [preview, setPreview] = useState(null);
  const [onTouch, setOnTouch] = useState(false);
  const navigate = useNavigate();

  setTimeout(() => {
    setShowAlert(false);
  }, 3000);

  //User details

  const username = localStorage.getItem("username");
  const userpic = localStorage.getItem("profilePic");
  const uid = localStorage.getItem("userId");

  //Show the preview image
  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  //Upload the post
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const imageTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!imageTypes.includes(selectedFile.type)) {
      setError("Selected file is not an image");
      alert("Selected file is not an image");
      return;
    }

    const reader = new FileReader();
    reader.readAsArrayBuffer(selectedFile);
    reader.onloadend = () => {
      const blob = new Blob([reader.result], { type: selectedFile.type });
      client.assets
        .upload("image", blob, {
          filename: selectedFile.name,
          contentType: selectedFile.type,
        })
        .then((imageAsset) => {
          // Create a reference to the uploaded image in the document
          const imageReference = {
            _type: "imageReference",
            asset: {
              _ref: imageAsset._id,
              _type: "reference",
            },
          };

          // Create a new document with the uploaded image
          client
            .create({
              _type: "pin",
              title: title,
              about: description,
              userName: username,
              userId: uid,
              postedBy: {
                _type: "postedBy",
                _ref: uid,
              },
              image: imageReference,
            })
            .then((createdDocument) => {
              setLoading(false);
              setShowAlert(true);
              navigate("/");
            });
        });
    };
  };

  return (
    <>
      {showAlert && ColorAlerts()}
      <div
        className={
          onTouch
            ? "h-1/3 mx-auto flex justify-center flex-col gap-3 items-center"
            : "flex flex-col sm:mt-4 justify-center mx-auto mt-14 items-center  rounded-lg bg-transparent w-1/3 h-87vh  shadow-2xl gap-7 transition-all duration-700 ease-out animate-slide-in sm:w-10/12 md:w-10/12"
        }
      >
        {preview && (
          <img src={preview} alt="Preview" className="w-20 h-20 rounded-sm" />
        )}
        <AddAPhotoOutlinedIcon
          fontSize="large"
          className="bg-red-600 rounded-md text-white"
        />
        <label
          htmlFor="#post"
          className="bg-blue-500 w-4/5 h-10 rounded-md text-center text-white items-center cursor-pointer"
        >
          <h4 className="my-1.5">Choose File</h4>
          <input
            type="file"
            id="#post"
            className="hidden"
            onChange={handleChange}
          />
        </label>
        <input
          type="text"
          id="#title"
          onTouchStart={() => setOnTouch(true)}
          placeholder="Add your title"
          value={title}
          className="mt-5 border-b-2 border-gray-500 text-3xl outline-none w-10/12 bg-transparent"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          id="#desc"
          placeholder="Add a description"
          value={description}
          className="mt-5 border-b-2 border-gray-500 outline-none w-10/12 text-xl bg-transparent"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="submit"
          onClick={handleSubmit}
          // className="bg-blue-600 rounded-md p-2 mt-3 w-2/5 text-white"
          className={`${
            onTouch
              ? "bg-blue-600 rounded-md p-2 w-2/5 text-white mb-7"
              : "bg-blue-600 rounded-md p-2 mt-3 w-2/5 text-white"
          }`}
        >
          Publish
        </button>

        {loading && LinearIndeterminate()}
      </div>
    </>
  );
};

export default CreatePin;
