import React from "react";
import "./gallery.scss";
import ImgCard from "./ImgCard";

let baseUrl = "https://nofipay.net/api/thumb.php?t=l&w=200&h=180&src=";
const Gallery = ({ photos }) => {
  return (
    <section className="gallery ">
      {photos.map((photo, index) => {
        const source = baseUrl + photos[index].logo_url;
        const title = photos[index].restaurantName;
        const id = photos[index].id;
        return <ImgCard imgContent={photos[index].name} imgSrc={source} imgTitle={title} imgId={id} />;
      })}
    </section>
  );
};

export default Gallery;
