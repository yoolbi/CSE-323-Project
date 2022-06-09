import React from "react";
import { Link } from "react-router-dom";
import Group320 from "../Group320";
import Group318 from "../Group318";
import Group325 from "../Group325";
import "./SearchMap.css";

function SearchMap(props) {
  const {
    iconInformation,
    info,
    hanamBbq1,
    iconSearch,
    group,
    myBook,
    image1,
    seansRestaurant,
    iconLocation_Pin,
    hanamBbq2,
    uncles,
    meat,
    vector2,
    vector3,
    spanText1,
    spanText2,
    seatLeft,
    text27,
    iconStar1,
    iconStar2,
    iconStar3,
    iconStar4,
    iconStar5,
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
    hanamBbq3,
    rectangle29,
    group320Props,
    group3181Props,
    group325Props,
    group3182Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="search-map screen">
        <div className="group-container-41">
          <div className="group-234-31">
            <div className="info-container-31">
              <Link to="/about">
                <img className="icon-information-31" src={iconInformation} />
              </Link>
              <div className="info-41 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
            </div>
            <div className="overlap-group2-120">
              <Link to="/search-map">
                <div className="rectangle-15-31"></div>
              </Link>
              <div className="hanam-bbq-45 arial">{hanamBbq1}</div>
              <img className="icon-search-31" src={iconSearch} />
            </div>
            <div className="flex-col-72">
              <Link to="/completedpreorderhome3">
                <img className="group-41" src={group} />
              </Link>
              <div className="my-book-35 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
            </div>
          </div>
          <div className="overlap-group4-69">
            <Link to="/main">
              <img className="image-1-20" src={image1} />
            </Link>
            <Group320 className={group320Props.className} />
            <Group318 className={group3181Props.className}>{group3181Props.children}</Group318>
            <Group325 className={group325Props.className} />
            <Group318 className={group3182Props.className}>{group3182Props.children}</Group318>
            <div className="group-304">
              <Link to="/select-restaurant-sean-s">
                <div className="ellipse-3-13 border-1px-black"></div>
              </Link>
              <div className="seans-restaurant-25 inter-medium-black-8px">{seansRestaurant}</div>
            </div>
            <div className="group-301">
              <div className="overlap-group1-186">

                  <div className="ellipse-1-18 border-1px-black"></div>

                <img className="icon-location_pin-5" src={iconLocation_Pin} />
              </div>
              <div className="hanam-bbq-46 inter-medium-black-8px">{hanamBbq2}</div>
            </div>
            <div className="group-308">
              <Link to="/select-restaurant-uncle-s">
                <div className="ellipse-5-13 border-1px-black"></div>
              </Link>
              <div className="uncles-24 inter-medium-black-8px">{uncles}</div>
            </div>
          </div>
          <div className="overlap-group3-103">
            <div className="ellipse-11-3 border-1px-black"></div>
            <img className="vector-204" src="/img/star-2@2x.png" />
            <div className="rectangle-68-3 border-1px-c4c4c4"></div>
            <div className="rectangle-72 border-0-5px-black"></div>
            <div className="meat-29 inter-normal-black-7px">{meat}</div>
            <div className="rectangle-69-3"></div>
            <Link to="/main">
              <img className="vector-205" src={vector2} />
            </Link>
            <a href="/hanam-details-menu1">
            <img className="vector-206" src={vector3} />
            </a>
            <div className="text-26 inter-extra-bold-white-48px">
              <span className="inter-extra-bold-apple-48px">{spanText1}</span>
              <span className="inter-extra-bold-black-48px">{spanText2}</span>
            </div>
            <div className="seat-left-8 inter-bold-black-20px">{seatLeft}</div>
            <div className="rectangle-70-3"></div>
            <div className="group-300">
              <div className="overlap-group-330">
                <div className="text-27 inter-semi-bold-saffron-20px">{text27}</div>
                <img className="icon-star-147" src={iconStar1} />
              </div>
              <img className="icon-star-148" src={iconStar2} />
              <img className="icon-star-149" src={iconStar3} />
              <img className="icon-star-146" src={iconStar4} />
              <img className="icon-star-146" src={iconStar5} />
            </div>
            <div className="x180m-away-1 inter-normal-black-20px">{x180MAway}</div>
            <img className="image-5" src={image5} />
            <img className="image-6-13" src={image6} />
            <div className="rectangle-71-3"></div>
            <div className="open-1000-am-close-1 inter-light-black-24px">
              <span className="inter-light-black-24px">{spanText3}</span>
              <span className="inter-light-black-24px">{spanText4}</span>
              <span className="inter-light-black-24px">{spanText5}</span>
              <span className="inter-light-black-24px">{spanText6}</span>
              <span className="inter-light-black-24px">{spanText7}</span>
              <span className="inter-light-black-24px">{spanText8}</span>
            </div>
            <div className="address-46 inter-normal-blue-ribbon-14px">{address}</div>
            <div className="hanam-bbq-47 inter-extra-bold-black-25px">{hanamBbq3}</div>
          </div>
        </div>
        <img className="rectangle-29-1" src={rectangle29} />
      </div>
    </div>
  );
}

export default SearchMap;
