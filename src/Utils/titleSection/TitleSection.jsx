import React from "react";
import './TitleSection.css'

export default function TitleSection(props) {
  return (
    <div className="titlePartSection">
      <p className="text">{props.section}</p>
      <h2 className="title">
        {props.title } 
      <span className="titleSpan"> {'' + props.titleSpan + ''}</span> 
      </h2>
    </div>
  );
}
