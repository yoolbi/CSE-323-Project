import React from "react";
import { Link } from "react-router-dom";
import Group44 from "../Group44";
import "./SelectRestaurant1.css";

function SelectRestaurant1(props) {
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
    seatLeft,
    meat,
    x180MAway,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    address,
    hanamBbq,
    image6,
    rectangle29,
    group44Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="select-restaurant-1 screen">
        <div className="flex-row-550">
          <div className="overlap-group3-446">
            <img className="search-10" src={search} />
          </div>
          <div className="flex-col-466">
            <Link to="/completed-preorder-home">
              <img className="group-95" src={group} />
            </Link>
            <div className="my-order-22 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-551">
          <div className="overlap-group-container-71">
            <div className="overlap-group1-644">
              <Link to="/main">
                <img className="image-1-63" src={image1} />
              </Link>
              <img className="vector-769" src="/img/vector-21@2x.png" />
              <div className="ellipse-1-49 border-1px-black"></div>
              <div className="ellipse-2 border-1px-black"></div>
              <Link to="/select-restaurant-sean-s">
                <div className="ellipse-3-25 border-1px-black"></div>
              </Link>
              <div className="ellipse-4 border-1px-black"></div>
              <div className="ellipse-9 border-1px-black"></div>
              <div className="ellipse-10 border-1px-black"></div>
              <div className="ellipse-5-30 border-1px-black"></div>
              <div className="ellipse-6-16 border-1px-black"></div>
              <div className="ellipse-7 border-1px-black"></div>
              <div className="ellipse-8 border-1px-black"></div>
            </div>
            <div className="overlap-group2-492">
              <div className="ellipse-11-4 border-1px-black"></div>
              <img className="vector-770" src={vector2} />
              <div className="rectangle-68-14 border-1px-c4c4c4"></div>
              <div className="rectangle-69-23"></div>
              <Link to="/main">
                <img className="vector-771" src={vector3} />
              </Link>
              <Link to="/restaurant-details-menu1">
                <img className="vector-772" src={vector4} />
              </Link>
              <div className="text-339 inter-extra-bold-white-48px">
                <span className="inter-extra-bold-apple-48px">{spanText1}</span>
                <span className="inter-extra-bold-black-48px">{spanText2}</span>
              </div>
              <div className="seat-left-24 inter-bold-black-20px">{seatLeft}</div>
              <div className="rectangle-72-1 border-0-5px-black"></div>
              <div className="meat-68 inter-normal-black-7px">{meat}</div>
              <div className="rectangle-70-4"></div>
              <Group44 text7={group44Props.text7} />
              <div className="x180m-away-2 inter-normal-black-20px">{x180MAway}</div>
              <div className="rectangle-71-4"></div>
              <div className="open-1000-am-close-2 inter-light-black-24px">
                <span className="inter-light-black-24px">{spanText3}</span>
                <span className="inter-light-black-24px">{spanText4}</span>
                <span className="inter-light-black-24px">{spanText5}</span>
                <span className="inter-light-black-24px">{spanText6}</span>
                <span className="inter-light-black-24px">{spanText7}</span>
                <span className="inter-light-black-24px">{spanText8}</span>
              </div>
              <div className="address-100 inter-normal-blue-ribbon-14px">{address}</div>
              <Link to="/restaurant-details-menu1">
                <div className="hanam-bbq-149 inter-extra-bold-black-25px">{hanamBbq}</div>
              </Link>
              <img className="image-6-47" src={image6} />
            </div>
          </div>
          <img className="rectangle-29-39" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default SelectRestaurant1;
