import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useState } from "react";

const Pagination = () => {
  const [pages, setPages] = useState([{
    title:"home page",
    description:"This is home page of my website"
  },{
    title:"food page",
    description:"This is my foof page of my website"
  },{
    title:"our project",
    description:"This is our project which our company completed"
  }]);

  const [currentPage, setCurrentPage] = useState(0);

  function handlePrevClick() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }
  function handleClickNext() {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div>
      <button onClick={handlePrevClick}>
        <GrPrevious />
      </button>

      <button onClick={handleClickNext}>
        <GrNext />
      </button>
      {pages[currentPage.description]}
      <p>{pages[currentPage].description}</p>
    </div>
  );
};

export default Pagination;
