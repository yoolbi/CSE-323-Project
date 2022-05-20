import React from "react";
import { Link } from "react-router-dom";
import Group44 from "../Group44";
import "./SelectRestaurant2.css";

function SelectRestaurant2(props) {
  const {
    search,
    group,
    myOrder,
    image1,
    vector2,
    vector3,
    vector4,
    spanText1,
    spanText2,
    spanText3,
    minWaiting,
    x270MAway,
    x1,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    address,
    seansRestaurant,
    western,
    rectangle29,
    group44Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="select-restaurant-2 screen">
        <div className="flex-row-88">
          <div className="overlap-group2-26">
            <img className="search-25" src={search} />
          </div>
          <div className="flex-col-63">
            <Link to="/completed-preorder-home">
              <img className="group-43" src={group} />
            </Link>
            <div className="my-order-23 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-89">
          <div className="overlap-group1-46">
            <Link to="/main">
              <img className="image-1-10" src={image1} />
            </Link>
            <img className="vector-157" src="/img/vector-166@2x.png" />
            <div className="ellipse-1-10 border-1px-black"></div>
            <div className="ellipse-2-10 border-1px-black"></div>
            <div className="ellipse-3-10 border-1px-black"></div>
            <div className="ellipse-4-10 border-1px-black"></div>
            <div className="ellipse-9-12 border-1px-black"></div>
            <div className="ellipse-10-12 border-1px-black"></div>
            <div className="ellipse-11-12 border-1px-black"></div>
            <div className="ellipse-5-10 border-1px-black"></div>
            <div className="ellipse-6-10 border-1px-black"></div>
            <div className="ellipse-7-13 border-1px-black"></div>
            <div className="ellipse-8-10 border-1px-black"></div>
            <img className="vector-158" src={vector2} />
            <div className="rectangle-68-8 border-1px-mist-gray"></div>
            <div className="rectangle-69-11"></div>
            <Link to="/main">
              <img className="vector-159" src={vector3} />
            </Link>
            <img className="vector-160" src={vector4} />
            <div className="text-27 inter-extra-bold-white-48px">
              <span className="inter-extra-bold-apple-48px">{spanText1}</span>
              <span className="span1-97">{spanText2}</span>
              <span className="inter-extra-bold-black-48px">{spanText3}</span>
            </div>
            <div className="min-waiting inter-bold-black-20px">{minWaiting}</div>
            <div className="rectangle-70-8"></div>
            <Group44 text7={group44Props.text7} className={group44Props.className} />
            <div className="x270m-away inter-normal-black-20px">{x270MAway}</div>
            <img className="x1-25" src={x1} />
            <div className="rectangle-71-7"></div>
            <div className="open-0900-am-close inter-light-black-24px">
              <span className="inter-light-black-24px">{spanText4}</span>
              <span className="inter-light-black-24px">{spanText5}</span>
              <span className="inter-light-black-24px">{spanText6}</span>
              <span className="inter-light-black-24px">{spanText7}</span>
              <span className="inter-light-black-24px">{spanText8}</span>
              <span className="inter-light-black-24px">{spanText9}</span>
            </div>
            <div className="address-26 inter-normal-blue-ribbon-14px">{address}</div>
            <div className="seans-restaurant">{seansRestaurant}</div>
            <div className="rectangle-72-5 border-0-5px-black"></div>
            <div className="western-7 inter-normal-black-7px">{western}</div>
          </div>
          <img className="rectangle-29-23" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default SelectRestaurant2;
