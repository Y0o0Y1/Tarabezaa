import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchingSection.css";
import ImgCard from "./ImgCard";
import Gallery from "./Gallery";
import Pagination from "../Pagination/Pagination";

const SearchingSection = () => {
  let baseUrl = "https://nofipay.net/api/thumb.php?t=l&w=200&h=180&src=";
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantsPerPage] = useState(8);

  const indexOfLastPhoto = currentPage * restaurantsPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - restaurantsPerPage;
  const currentRestaurants = filteredRestaurants.slice(
    indexOfFirstPhoto,
    indexOfLastPhoto
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://nofipay.net/api/v1/restaurants")
      .then((res) => {
        setRestaurants(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredRestaurants(
      restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, restaurants]);
  if (loading) {
    return <p>Loading Restaurants...</p>;
  }
  console.log(filteredRestaurants);
  return (
    <div className="search-section">
      <h4>Search For Your Favourite Restaurant</h4>
      <div>
        <section className="input-wrapper">
          <input
          className="input"
            type="text"
            placeholder="Search Restaurants"
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>

        <div className="gallery-section">
          <Gallery photos={currentRestaurants} />
          <div className="pagination-wrapper">

          <Pagination
            className="pagination"
            photosPerPage={restaurantsPerPage}
            totalPhotos={filteredRestaurants.length}
            paginate={paginate}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchingSection;
