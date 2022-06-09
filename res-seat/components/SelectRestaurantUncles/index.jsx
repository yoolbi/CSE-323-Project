import React from "react";
import { Link } from "react-router-dom";
import Group307 from "../Group307";
import Group320 from "../Group320";
import Group318 from "../Group318";
import Group325 from "../Group325";
import "./SelectRestaurantUncles.css";

function SelectRestaurantUncles(props) {
  const {
    iconInformation,
    info,
    uncles1,
    iconSearch,
    group,
    myBook,
    image1,
    vector2,
    spanText1,
    spanText2,
    spanText3,
    seatLeft,
    x120MAway,
    x1,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    address,
    uncles2,
    asian,
    hanamBbq,
    seansRestaurant,
    iconLocation_Pin,
    uncles3,
    group307Props,
    group320Props,
    group3181Props,
    group325Props,
    group3182Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="select-restaurant-uncle-s screen">
        <div className="group-234-6">
          <div className="info-container-6">
            <Link to="/about">
              <img className="icon-information-6" src={iconInformation} />
            </Link>
            <div className="info-15 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group3-48">
            <Link to="/search-map">
              <div className="rectangle-15-6"></div>
            </Link>
            <div className="uncles-9 arial"></div>
            <img className="icon-search-6" src={iconSearch} />
          </div>
          <div className="flex-col-16">
            <Link to="/completedpreorderhome3">
              <img className="group-7" src={group} />
            </Link>
            <div className="my-book-8 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group4-33">
          <Link to="/main">
            <img className="image-1-5" src={image1} />
          </Link>
          <div className="ellipse-11-1 border-1px-black"></div>
          <div className="rectangle-68-1 border-1px-c4c4c4"></div>
          <div className="rectangle-69-1"></div>
          <Link to="/main">
            <img className="vector-117" src="/img/vector-44@2x.png" />
          </Link>
          <Link to="/uncle-s-details-menu1">
            <img className="vector-118" src={vector2} />
          </Link>
          <div className="text-21 inter-extra-bold-white-48px">
            <span className="inter-extra-bold-apple-48px">{spanText1}</span>
            <span className="span1-32">{spanText2}</span>
            <span className="inter-extra-bold-black-48px">{spanText3}</span>
          </div>
          <div className="seat-left-6 inter-bold-black-20px">{seatLeft}</div>
          <div className="rectangle-70-1"></div>
          <Group307 text22={group307Props.text22} />
          <div className="x120m-away inter-normal-black-20px">{x120MAway}</div>
          <img className="x1-19" src={x1} />
          <div className="rectangle-71-1"></div>
          <div className="open-0900-am-close-1 inter-light-black-24px">
            <span className="inter-light-black-24px">{spanText4}</span>
            <span className="inter-light-black-24px">{spanText5}</span>
            <span className="inter-light-black-24px">{spanText6}</span>
            <span className="inter-light-black-24px">{spanText7}</span>
            <span className="inter-light-black-24px">{spanText8}</span>
            <span className="inter-light-black-24px">{spanText9}</span>
          </div>
          <div className="address-28 inter-normal-blue-ribbon-14px">{address}</div>
          <Link to="/uncle-s-details-menu1">
            <div className="uncles-10 inter-extra-bold-black-24px">{uncles2}</div>
          </Link>
          <div className="overlap-group1-73 border-0-5px-black">
            <div className="asian-7 inter-normal-black-7px">{asian}</div>
          </div>
          <Group320 className={group320Props.className} />
          <Group318 className={group3181Props.className}>{group3181Props.children}</Group318>
          <div className="group-311">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-3 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-10 inter-medium-black-8px">{hanamBbq}</div>
          </div>
          <Group325 className={group325Props.className} />
          <Group318 className={group3182Props.className}>{group3182Props.children}</Group318>
          <div className="group-312">
            <Link to="/select-restaurant-sean-s">
              <div className="ellipse-3-4 border-1px-black"></div>
            </Link>
            <div className="seans-restaurant-10 inter-medium-black-8px">{seansRestaurant}</div>
          </div>
          <div className="group-316">
            <div className="overlap-group2-63">
              <img className="icon-location_pin-3" src={iconLocation_Pin} />
              <Link to="/select-restaurant-uncle-s">
                <div className="ellipse-5-4 border-1px-black"></div>
              </Link>
            </div>
            <div className="uncles-11 inter-medium-black-8px">{uncles3}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectRestaurantUncles;
