import React from "react";
import { Link } from "react-router-dom";
import Group320 from "../Group320";
import Group318 from "../Group318";
import Group307 from "../Group307";
import "./SelectRestaurantHanamBBQ.css";

function SelectRestaurantHanamBBQ(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    image1,
    shakeShack,
    seansRestaurant,
    iconLocation_Pin,
    hanamBbq1,
    uncles,
    meat,
    x180MAway,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    address,
    hanamBbq2,
    image6,
    spanText7,
    spanText8,
    seatLeft,
    vector2,
    vector3,
    group320Props,
    group3181Props,
    group3182Props,
    group307Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="select-restaurant-hanam-bbq screen">
        <div className="group-234-19">
          <div className="info-container-19">
            <Link to="/about">
              <img className="icon-information-19" src={iconInformation} />
            </Link>
            <div className="info-29 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group4-56">
            <Link to="/search-map">
              <div className="rectangle-15-19"></div>
            </Link>
            <img className="icon-search-19" src={iconSearch} />
          </div>
          <div className="flex-col-42">
            <Link to="/completedpreorderhome3">
              <img className="group-26" src={group} />
            </Link>
            <div className="my-book-21 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group6-23">
          <Link to="/main">
            <img className="image-1-13" src={image1} />
          </Link>
          <div className="ellipse-18-12 border-1px-black"></div>
          <Group320 className={group320Props.className} />
          <Group318 className={group3181Props.className}>{group3181Props.children}</Group318>
          <div className="shake-shack-13 inter-medium-black-8px">{shakeShack}</div>
          <Group318 className={group3182Props.className}>{group3182Props.children}</Group318>
          <div className="group-295">
            <Link to="/select-restaurant-sean-s">
              <div className="ellipse-3-10 border-1px-black"></div>
            </Link>
            <div className="seans-restaurant-20 inter-medium-black-8px">{seansRestaurant}</div>
          </div>
          <div className="group-297-1">
            <div className="overlap-group3-88">
              <Link to="/select-restaurant-hanam-bbq">
                <div className="ellipse-1-11 border-1px-black"></div>
              </Link>
              <img className="icon-location_pin-4" src={iconLocation_Pin} />
            </div>
            <div className="hanam-bbq-32 inter-medium-black-8px">{hanamBbq1}</div>
          </div>
          <div className="group-298">
            <Link to="/select-restaurant-uncle-s">
              <div className="ellipse-5-10 border-1px-black"></div>
            </Link>
            <div className="uncles-19 inter-medium-black-8px">{uncles}</div>
          </div>
        </div>
        <div className="overlap-group5-36">
          <div className="ellipse-11-2 border-1px-black"></div>
          <img className="vector-164" src="/img/vector-2@2x.png" />
          <div className="rectangle-69-2"></div>
          <div className="rectangle-68-2 border-1px-c4c4c4"></div>
          <div className="overlap-group-267 border-0-5px-black">
            <div className="meat-19 inter-normal-black-7px">{meat}</div>
          </div>
          <div className="rectangle-70-2"></div>
          <Group307 text22={group307Props.text22} className={group307Props.className} />
          <div className="x180m-away inter-normal-black-20px">{x180MAway}</div>
          <div className="rectangle-71-2"></div>
          <div className="open-1000-am-close inter-light-black-24px">
            <span className="inter-light-black-24px">{spanText1}</span>
            <span className="inter-light-black-24px">{spanText2}</span>
            <span className="inter-light-black-24px">{spanText3}</span>
            <span className="inter-light-black-24px">{spanText4}</span>
            <span className="inter-light-black-24px">{spanText5}</span>
            <span className="inter-light-black-24px">{spanText6}</span>
          </div>
          <div className="address-37 inter-normal-blue-ribbon-14px">{address}</div>
          <Link to="/hanam-details-menu1">
          <div className="hanam-bbq-33 inter-extra-bold-black-25px">{hanamBbq2}</div>
          </Link>
          <img className="image-6-7" src={image6} />
          <div className="overlap-group2-89">
            <div className="text-25 inter-extra-bold-white-48px">
              <span className="inter-extra-bold-apple-48px">{spanText7}</span>
              <span className="inter-extra-bold-black-48px">{spanText8}</span>
            </div>
            <div className="seat-left-7 inter-bold-black-20px">{seatLeft}</div>
          </div>
          <Link to="/main">
            <img className="vector-165" src={vector2} />
          </Link>
          <Link to="/hanam-details-menu1">
            <img className="vector-166" src={vector3} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelectRestaurantHanamBBQ;
