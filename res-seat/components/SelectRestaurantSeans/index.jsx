import React from "react";
import { Link } from "react-router-dom";
import Group320 from "../Group320";
import Group318 from "../Group318";
import Group325 from "../Group325";
import "./SelectRestaurantSeans.css";

function SelectRestaurantSeans(props) {
  const {
    iconInformation,
    info,
    iconSearch,
    group,
    myBook,
    image1,
    vector2,
    spanText1,
    spanText2,
    spanText3,
    minWaiting,
    text3,
    iconStar1,
    iconStar2,
    iconStar3,
    iconStar4,
    iconStar5,
    x270MAway,
    x1,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    address,
    seansRestaurant1,
    western,
    hanamBbq,
    seansRestaurant2,
    iconLocation_Pin,
    uncles,
    group320Props,
    group3181Props,
    group325Props,
    group3182Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="select-restaurant-sean-s screen">
        <div className="group-234-5">
          <div className="info-container-5">
            <Link to="/about">
              <img className="icon-information-5" src={iconInformation} />
            </Link>
            <div className="info-6 applesdgothicneo-regular-normal-flamingo-12px">{info}</div>
          </div>
          <div className="overlap-group3-39">
            <Link to="/search-map">
              <div className="rectangle-15-5"></div>
            </Link>
            <img className="icon-search-5" src={iconSearch} />
          </div>
          <div className="flex-col-15">
            <Link to="/completedpreorderhome3">
              <img className="group-6" src={group} />
            </Link>
            <div className="my-book-7 applesdgothicneo-regular-normal-flamingo-12px">{myBook}</div>
          </div>
        </div>
        <div className="overlap-group4-24">
          <Link to="/main">
            <img className="image-1-2" src={image1} />
          </Link>
          <div className="ellipse-11 border-1px-black"></div>
          <div className="rectangle-68 border-1px-c4c4c4"></div>
          <div className="rectangle-69"></div>
          <Link to="/main">
            <img className="vector-103" src="/img/vector-44@2x.png" />
          </Link>
          <Link to="/sean-s-details-menu1">
            <img className="vector-104" src={vector2} />
          </Link>
          <div className="text-2 inter-extra-bold-white-48px">
            <span className="inter-extra-bold-apple-48px">{spanText1}</span>
            <span className="inter-extra-bold-spicy-pink-48px">{spanText2}</span>
            <span className="inter-extra-bold-black-48px">{spanText3}</span>
          </div>
          <div className="min-waiting inter-bold-black-20px">{minWaiting}</div>
          <div className="rectangle-70"></div>
          <div className="group-297">
            <div className="overlap-group-82">
              <div className="text-3 inter-semi-bold-saffron-20px">{text3}</div>
              <img className="icon-star-29" src={iconStar1} />
            </div>
            <img className="icon-star-30" src={iconStar2} />
            <img className="icon-star-31" src={iconStar3} />
            <img className="icon-star-28" src={iconStar4} />
            <img className="icon-star-28" src={iconStar5} />
          </div>
          <div className="x270m-away inter-normal-black-20px">{x270MAway}</div>
          <img className="x1-18" src={x1} />
          <div className="rectangle-71"></div>
          <div className="open-0900-am-close inter-light-black-24px">
            <span className="inter-light-black-24px">{spanText4}</span>
            <span className="inter-light-black-24px">{spanText5}</span>
            <span className="inter-light-black-24px">{spanText6}</span>
            <span className="inter-light-black-24px">{spanText7}</span>
            <span className="inter-light-black-24px">{spanText8}</span>
            <span className="inter-light-black-24px">{spanText9}</span>
          </div>
          <div className="address-27 inter-normal-blue-ribbon-14px">{address}</div>
          <Link to="/sean-s-details-menu1">
            <div className="seans-restaurant-6 inter-extra-bold-black-24px">{seansRestaurant1}</div>
          </Link>
          <div className="overlap-group1-59 border-0-5px-black">
            <div className="western-7 inter-normal-black-7px">{western}</div>
          </div>
          <Group320 className={group320Props.className} />
          <Group318 className={group3181Props.className}>{group3181Props.children}</Group318>
          <div className="group-285">
            <Link to="/select-restaurant-hanam-bbq">
              <div className="ellipse-1-2 border-1px-black"></div>
            </Link>
            <div className="hanam-bbq-6 inter-medium-black-8px">{hanamBbq}</div>
          </div>
          <Group325 className={group325Props.className} />
          <Group318 className={group3182Props.className}>{group3182Props.children}</Group318>
          <div className="overlap-group2-52">
            <div className="group-287">
              <Link to="/select-restaurant-sean-s">
                <div className="ellipse-3-2 border-1px-black"></div>
              </Link>
              <div className="seans-restaurant-7 inter-medium-black-8px">{seansRestaurant2}</div>
            </div>
            <img className="icon-location_pin" src={iconLocation_Pin} />
          </div>
          <div className="group-292">
            <Link to="/select-restaurant-uncle-s">
              <div className="ellipse-5-2 border-1px-black"></div>
            </Link>
            <div className="uncles-5 inter-medium-black-8px">{uncles}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectRestaurantSeans;
