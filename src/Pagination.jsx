import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import "./App.css";
import { useState } from "react";

const Pagination = (props) => {
  return (
    <div>
      {/* calling function which we declare in Home.js */}
      <button
        className="disabled"
        onClick={props.prevClick}
        disabled={props.cpage === 1}
      >
        <GrPrevious />
      </button>

      <button
        onClick={props.nextClick}
        disabled={props.cpage === props.json.length}
      >
        <GrNext />
      </button>
    </div>
  );
};

export default Pagination;
