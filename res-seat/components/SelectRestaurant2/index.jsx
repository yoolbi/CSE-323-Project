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
        <div className="flex-row-601">
          <div className="overlap-group2-510">
            <img className="search-23" src={search} />
          </div>
          <div className="flex-col-486">
            <Link to="/completed-preorder-home">
              <img className="group-104" src={group} />
            </Link>
            <div className="my-order-34 applesdgothicneo-regular-normal-flamingo-12px">{myOrder}</div>
          </div>
        </div>
        <div className="flex-row-602">
          <div className="overlap-group1-658">
            <Link to="/main">
              <img className="image-1-71" src={image1} />
            </Link>
            <img className="vector-849" src="/img/vector-166@2x.png" />
            <div className="ellipse-1-55 border-1px-black"></div>
            <div className="ellipse-2-6 border-1px-black"></div>
            <div className="ellipse-3-31 border-1px-black"></div>
            <div className="ellipse-4-6 border-1px-black"></div>
            <div className="ellipse-9-8 border-1px-black"></div>
            <div className="ellipse-10-8 border-1px-black"></div>
            <div className="ellipse-11-12 border-1px-black"></div>
            <div className="ellipse-5-36 border-1px-black"></div>
            <div className="ellipse-6-22 border-1px-black"></div>
            <div className="ellipse-7-8 border-1px-black"></div>
            <div className="ellipse-8-6 border-1px-black"></div>
            <img className="vector-850" src={vector2} />
            <div className="rectangle-68-18 border-1px-c4c4c4"></div>
            <div className="rectangle-69-27"></div>
            <Link to="/main">
              <img className="vector-851" src={vector3} />
            </Link>
            <img className="vector-852" src={vector4} />
            <div className="text-358 inter-extra-bold-white-48px">
              <span className="inter-extra-bold-apple-48px">{spanText1}</span>
              <span className="inter-extra-bold-spicy-pink-48px">{spanText2}</span>
              <span className="inter-extra-bold-black-48px">{spanText3}</span>
            </div>
            <div className="min-waiting-8 inter-bold-black-20px">{minWaiting}</div>
            <div className="rectangle-70-8"></div>
            <Group44 text7={group44Props.text7} className={group44Props.className} />
            <div className="x270m-away-1 inter-normal-black-20px">{x270MAway}</div>
            <img className="x1-113" src={x1} />
            <div className="rectangle-71-7"></div>
            <div className="open-0900-am-close-2 inter-light-black-24px">
              <span className="inter-light-black-24px">{spanText4}</span>
              <span className="inter-light-black-24px">{spanText5}</span>
              <span className="inter-light-black-24px">{spanText6}</span>
              <span className="inter-light-black-24px">{spanText7}</span>
              <span className="inter-light-black-24px">{spanText8}</span>
              <span className="inter-light-black-24px">{spanText9}</span>
            </div>
            <div className="address-113 inter-normal-blue-ribbon-14px">{address}</div>
            <div className="seans-restaurant-92 inter-extra-bold-black-24px">{seansRestaurant}</div>
            <div className="rectangle-72-5 border-0-5px-black"></div>
            <div className="western-46 inter-normal-black-7px">{western}</div>
          </div>
          <img className="rectangle-29-49" src={rectangle29} />
        </div>
      </div>
    </div>
  );
}

export default SelectRestaurant2;
