import React from "react";
import { useNavigate } from "react-router-dom";
import { urlFor } from "../client";

const Pins = ({ searchResults }) => {
  const navigate = useNavigate();

  return (
    <div>
      {searchResults.map((result) => (
        <div key={result._id}>
          {console.log(result)}
          {result.image && (
            <img
              src={urlFor(result?.image)?.url()}
              className="rounded-lg cursor-zoom-in justify-center"
              alt="pin"
            />
          )}
          {result?.postedBy?.image && (
            <img
              src={result.postedBy?.image}
              className="w-5 h-5 rounded-full"
              alt="postedBy"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Pins;
