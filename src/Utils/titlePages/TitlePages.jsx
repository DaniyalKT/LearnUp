import React from "react";
import "./TitlePages.css";

export default function TitlePages(props) {

  return (
    <div className="titlePage">
      <h2>{props.titlePage}</h2>
      <p>
        <span className="titlePageHomeSpan">خانه </span> /{" "}
        <span className="titlePageCoursesSpan">{props.titleAddress}</span>
      </p>
    </div>
  );
}
