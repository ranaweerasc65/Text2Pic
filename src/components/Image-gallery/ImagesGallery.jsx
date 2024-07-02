import React from 'react';
import galleryImages from './galleryImages';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ImagesGallery = () => {
  return (
    <>
      <style jsx>{`
        .image__img {
          transition: .3s;
        }

        .image__img:hover {
          transform: scale(1.1);
        }
      `}</style>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
        <Masonry gutter="1rem">
          {galleryImages.map((item, index) => (
            <img
              className="image__img"
              src={item}
              key={index}
              alt=""
              style={{ width: "200%", display: "block", borderRadius: "10px" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default ImagesGallery;
