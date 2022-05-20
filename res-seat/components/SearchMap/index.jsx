import React from "react";
import { Link } from "react-router-dom";
import Group44 from "../Group44";
import "./SearchMap.css";

function SearchMap(props) {
  const {
    search,
    hanamBbq1,
    group,
    myOrder,
    image1,
    vector2,
    vector3,
    meat,
    vector4,
    vector5,
    spanText1,
    spanText2,
    seatLeft,
    x180MAway,
    image5,
    image6,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    address,
    hanamBbq2,
    rectangle29,
    group44Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="search-map screen">
        <div className="flex-row-61">
          <div className="overlap-group1-38">
            <img className="search-13" src={search} />
            <div className="hanam-bbq-14 arial">{hanamBbq1}</div>
            <Link to="/main">
              <img className="vector-66" src="/img/vector-17@2x.png" />
            </Link>
          </div>
          <div className="flex-col-51">
            <Link to="/completed-preorder-home">
              <img className="group-18" src={group} />
            </Link>
            <div className="my-order-12 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-62">
          <div className="overlap-group2-18">
            <img className="image-1-4" src={image1} />
            <img className="vector-67" src={vector2} />
            <div className="ellipse-1-4 border-1px-black"></div>
            <div className="ellipse-2-4 border-1px-black"></div>
            <div className="ellipse-3-4 border-1px-black"></div>
            <div className="ellipse-4-4 border-1px-black"></div>
            <div className="ellipse-9-6 border-1px-black"></div>
            <div className="ellipse-10-6 border-1px-black"></div>
            <div className="ellipse-11-6 border-1px-black"></div>
            <div className="ellipse-5-4 border-1px-black"></div>
            <div className="ellipse-6-4 border-1px-black"></div>
            <div className="ellipse-7-6 border-1px-black"></div>
            <div className="ellipse-8-4 border-1px-black"></div>
            <img className="vector-68" src={vector3} />
            <div className="rectangle-68-2 border-1px-mist-gray"></div>
            <div className="rectangle-72-1 border-0-5px-black"></div>
            <div className="meat-6 inter-normal-black-7px">{meat}</div>
            <div className="rectangle-69-5"></div>
            <img className="vector-69" src={vector4} />
            <Link to="/restaurant-details-menu1">
              <img className="vector-70" src={vector5} />
            </Link>
            <div className="text-19 inter-extra-bold-white-48px">
              <span className="inter-extra-bold-apple-48px">{spanText1}</span>
              <span className="inter-extra-bold-black-48px">{spanText2}</span>
            </div>
            <div className="seat-left-5 inter-bold-black-20px">{seatLeft}</div>
            <div className="rectangle-70-2"></div>
            <Group44 text7={group44Props.text7} className={group44Props.className} />
            <div className="x180m-away-1 inter-normal-black-20px">{x180MAway}</div>
            <img className="image-5" src={image5} />
            <img className="image-6-5" src={image6} />
            <div className="rectangle-71-2"></div>
            <div className="open-1000-am-close-1 inter-light-black-24px">
              <span className="inter-light-black-24px">{spanText3}</span>
              <span className="inter-light-black-24px">{spanText4}</span>
              <span className="inter-light-black-24px">{spanText5}</span>
              <span className="inter-light-black-24px">{spanText6}</span>
              <span className="inter-light-black-24px">{spanText7}</span>
              <span className="inter-light-black-24px">{spanText8}</span>
            </div>
            <div className="address-17 inter-normal-blue-ribbon-14px">{address}</div>
            <div className="hanam-bbq-15 inter-extra-bold-black-25px">{hanamBbq2}</div>
          </div>
          <img className="rectangle-29-9" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default SearchMap;
