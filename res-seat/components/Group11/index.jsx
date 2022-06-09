import React from "react";
import "./Group11.css";
import { Link } from "react-router-dom";

function Group11(props) {
  const { src, className, link } = props;

  return (
    <div className={`group-7-1 ${className || ""}`}>
      <Link to={link}>
      <img className="outline_remove_black_24dp-1" src={src} />
      </Link>
    </div>
  );
}

export default Group11;
