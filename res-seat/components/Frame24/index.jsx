import React from "react";
import Group23 from "../Group23";
import "./Frame24.css";

function Frame24(props) {
  const { className, group23Props } = props;

  return (
    <div className={`frame-2-6 ${className || ""}`}>
      <div className="overlap-group6-98">
        <Group23
          component11Props={group23Props.component11Props}
          component12Props={group23Props.component12Props}
          component13Props={group23Props.component13Props}
        />
        <img className="image-2-45" src="/img/image-2@2x.png" />
        <img
          className="loaded-baked-potato-soup-recipe-3-2-9"
          src="/img/loaded-baked-potato-soup-recipe-3-2-1@2x.png"
        />
        <img className="loaded-baked-potato-soup-recipe-3-3-2" src="/img/loaded-baked-potato-soup-recipe-3-2@2x.png" />
      </div>
    </div>
  );
}

export default Frame24;
