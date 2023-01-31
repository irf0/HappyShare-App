import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { useNavigate, useParams } from "react-router-dom";
import { categories, feedQuery, searchQuery } from "../utils/data";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import ClipLoader from "react-spinners/ClipLoader";
import { client, urlFor } from "../client";
import PinDetail from "./PinDetail";

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const [feedPins, setFeedPins] = useState(null);
  const [color, setColor] = useState("#fa1212");
  const { categoryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryName) {
      setLoading(true);
      const query = searchQuery(categoryName);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      //else show the default feed
      // setLoading(true);
      client.fetch(feedQuery).then((feedData) => {
        setFeedPins(feedData);
        console.log(feedData);
        setLoading(false);
      });
    }
  }, [categoryName]); //-->Run this code whenever categoryName changes..

  return (
    <>
      <div>
        <Navbar />
        <MobileNav />

        {loading ? (
          <div>
            <ClipLoader
              color={color}
              loading={loading}
              size={50}
              className="mx-50 mt-2"
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <h4 style={{ marginLeft: "45vw" }}>New ideas being cooked...</h4>
          </div>
        ) : (
          ""
        )}
        <Masonry
          className="flex animate-slide-fwd mx-4 mt-3 gap-4 relative sm:mt-24 "
          breakpointCols={breakpointColumnsObj}
        >
          {categories.map((item) => (
            <div key={item._id}>
              <h2>{item.name} </h2>
              <img
                src={item.image}
                alt=""
                className="rounded-lg hover:shadow-inner"
              />
            </div>
          ))}
        </Masonry>
        <Masonry
          className="flex animate-slide-fwd mx-4 mt-3 absolute sm:mt-24 gap-3"
          breakpointCols={breakpointColumnsObj}
        >
          {feedPins?.map((pin) => (
            <div key={pin._id}>
              {console.log(pin.postedBy)}
              <h1>{pin.title}</h1>
              {pin.image && (
                <img
                  src={urlFor(pin?.image)?.url()}
                  alt="feed-pin"
                  className="rounded-md mt-2"
                />
              )}
              {pin?.postedBy?.image && (
                <img
                  src={pin?.postedBy?.image}
                  alt="postedBy"
                  className="w-8 h-8 rounded-full mt-1"
                />
              )}
              {pin?.postedBy?.userName && <p>{pin?.postedBy?.userName}</p>}
            </div>
          ))}
        </Masonry>
      </div>
    </>
  );
};

export default Feed;
