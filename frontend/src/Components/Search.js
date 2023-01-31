import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { client } from "../client";
import Pins from "../Container/Pins";
import { searchQuery } from "../utils/data";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

//Bugs now -> search has become direct like anything put in input it shows result directly ignoring the search input. => we'll fix it later

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#fa1212");
  const navigate = useNavigate();

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value !== "") {
      setLoading(true);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    search(searchInput);
  };

  const search = () => {
    setLoading(true);
    const query = searchQuery(searchInput);
    client.fetch(query).then((searchResults) => {
      setSearchResults(searchResults);
      setLoading(false);
    });
  };

  return (
    <div>
      <Navbar
        searchTerm={searchInput}
        setSearchInput={handleSearchInput}
        handleSearch={handleSearch}
      />
      <div className="flex justify-center mt-2">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="Mobile-search"
            onChange={handleSearchInput}
            placeholder="Search"
            className="lg:hidden xl:hidden flex ml-4 rounded-3xl p-2 w-5/6 sm:w-5/6 bg-gray-300 text-center outline-none "
          />
        </form>
      </div>

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
          <h4 style={{ marginLeft: "45vw" }}>New ideas being loaded</h4>
        </div>
      ) : (
        ""
      )}

      <Masonry className="flex animate-slide-fwd mx-4 mt-3 gap-4 absolute sm:mt-24 ">
        <Pins searchResults={searchResults} />
      </Masonry>
    </div>
  );
};

export default Search;
