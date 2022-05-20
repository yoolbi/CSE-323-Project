import React from "react";
import { Link } from "react-router-dom";
import Group51 from "../Group51";
import Component16 from "../Component16";
import "./SearchList.css";

function SearchList(props) {
  const {
    search,
    hanamBbq,
    group,
    myOrder,
    line27,
    line29,
    line28,
    meat,
    vector2,
    image6,
    rectangle29,
    component16Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="search-list screen">
        <div className="flex-row-10">
          <div className="overlap-group5-5">
            <img className="search-3" src={search} />
            <div className="hanam-bbq-3 arial">{hanamBbq}</div>
            <Link to="/see-list">
              <img className="vector-17" src="/img/vector-17@2x.png" />
            </Link>
          </div>
          <div className="flex-col-5">
            <Link to="/completed-preorder-home">
              <img className="group-2" src={group} />
            </Link>
            <div className="my-order-2 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-11">
          <div className="overlap-group4-7 border-1px-black">
            <img className="line-27" src={line27} />
            <Link to="/main">
              <img className="line-29" src={line29} />
            </Link>
            <Group51 />
            <img className="line-28" src={line28} />
            <div className="overlap-group6-3">
              <Component16 image3={component16Props.image3} star1={component16Props.star1} />
              <div className="rectangle-69"></div>
              <div className="meat inter-normal-black-7px">{meat}</div>
              <Link to="/restaurant-details-menu1">
                <img className="vector-18" src={vector2} />
              </Link>
              <img className="image-6" src={image6} />
            </div>
          </div>
          <img className="rectangle-29-2" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default SearchList;
