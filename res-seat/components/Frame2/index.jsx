import React from "react";
import Group23 from "../Group23";
import "./Frame2.css";

function Frame2(props) {
  const { className, group23Props } = props;

  return (
    <div className={`frame-2 ${className || ""}`}>
      <div className="overlap-group6-11">
        <Group23
          component11Props={group23Props.component11Props}
          component12Props={group23Props.component12Props}
          component13Props={group23Props.component13Props}
        />
        <img className="image-2-10" src="/img/image-11-2@2x.png" />
        <img
          className="loaded-baked-potato-soup-recipe-3-2-2"
          src="/img/loaded-baked-potato-soup-recipe-3-2-1@2x.png"
        />
        <img className="loaded-baked-potato-soup-recipe-3-3-2" src="/img/loaded-baked-potato-soup-recipe-3-2@2x.png" />
      </div>
    </div>
  );
}

export default Frame2;
