import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useState } from "react";

const Pagination = (props) => {

  return (
    <div>
      {/* calling function which we declare in Home.js */}
      <button onClick={props.prevClick}>
        <GrPrevious />
      </button>

      <button onClick={props.nextClick}>
        <GrNext />
      </button>
    </div>
  );
};

export default Pagination;
