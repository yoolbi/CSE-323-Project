import React from "react";
import { Link } from "react-router-dom";
import Component16 from "../Component16";
import "./FilterListCategory4.css";

function FilterListCategory4(props) {
  const {
    search,
    group,
    myOrder,
    line27,
    line29,
    category,
    line28,
    image6,
    meat,
    vector2,
    rectangle29,
    component16Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filter-list-category-4 screen">
        <div className="flex-col-46">
          <div className="overlap-group-container-7">
            <div className="overlap-group3-20">
              <img className="search-10" src={search} />
            </div>
            <div className="overlap-group2-14">
              <Link to="/completed-preorder-home">
                <img className="group-6" src={group} />
              </Link>
              <div className="my-order-9 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
            </div>
          </div>
          <div className="overlap-group1-35 border-1px-black">
            <img className="line-27-2" src={line27} />
            <img className="line-29-2" src={line29} />
            <div className="overlap-group5-17">
              <Link to="/filter-list-category-3">
                <div className="rectangle-90"></div>
              </Link>
              <div className="category-5 inter-normal-white-13px">{category}</div>
              <img className="vector-51" src="/img/vector-48@2x.png" />
            </div>
            <img className="line-28-2" src={line28} />
            <div className="overlap-group4-25">
              <Component16 image3={component16Props.image3} star1={component16Props.star1} />
              <img className="image-6-3" src={image6} />
              <div className="rectangle-69-3"></div>
              <div className="meat-3 inter-normal-black-7px">{meat}</div>
              <Link to="/restaurant-details-menu1">
                <img className="vector-52" src={vector2} />
              </Link>
            </div>
          </div>
        </div>
        <img className="rectangle-29-6" src={rectangle29} />
      </div>
    </div>
  );
}

export default FilterListCategory4;
