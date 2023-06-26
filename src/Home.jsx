import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card/Card";
import Pagination from "./Pagination";
import imageJson from "./data";
const Home = () => {
  const [listImages, setListImages] = useState(imageJson.slice(0, 5));
  const [pageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {}, []);
  function paginate(page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return imageJson.slice(
      (page_number - 1) * pageSize,
      page_number * pageSize
    );
  }

  function handlePrevClick() {
    if (currentPage > 1) {
      console.log(currentPage);
      setCurrentPage(currentPage - 1);
      setListImages(paginate(currentPage - 1));
    }
  }
  function handleClickNext() {
    if (currentPage < imageJson.length / pageSize - 1) {
      //  console.log(paginate(currentPage + 1)) ;
      setCurrentPage(currentPage + 1);
      setListImages(paginate(currentPage + 1));
    }
  }
  return (
    <>
      <div
        className="container"
        style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}
      >
        {listImages.map((currentVal) => {
          return <Card key={currentVal.id} {...currentVal} />;
        })}
        {/* {JSON.stringify(listImages)} */}
      </div>
      {/* passing function as a props */}
      <Pagination
        prevClick={handlePrevClick}
        nextClick={handleClickNext}
        cpage={currentPage}
        json={imageJson}
      />
    </>
  );
};

export default Home;
