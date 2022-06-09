import React from "react";
import { Link } from "react-router-dom";
import Group273 from "../Group273";
import "./SeansDetailsMenu1.css";

function SeansDetailsMenu1(props) {
  const {
    overlapGroup4,
    rectangle38,
    areGoing,
    spanText1,
    spanText2,
    minsWaiting,
    line1,
    seansRestaurant,
    x120M,
    line4,
    line5,
    text23,
    number,
    iconStar,
    line9,
    line12,
    line15,
    line16,
    line13,
    line14,
    vongoleShrimpPasta,
    beefRiceNoodle,
    grillSteakSalad,
    menu,
    info,
    review,
    map,
    group273Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sean-s-details-menu1 screen">
        <div className="overlap-group-container-22">
          <div className="overlap-group4-43" style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <Link to="/select-restaurant-sean-s">
              <img className="vector-137" src="/img/vector-4@2x.png" />
            </Link>
          </div>
          <div className="overlap-group5-23">
            <img className="rectangle-38-6" src={rectangle38} />
            <div className="are-going-9 inter-thin-black-18px">{areGoing}</div>
            <div className="number-123 inter-extra-bold-white-40px">
              <span className="inter-extra-bold-spicy-pink-40px">{spanText1}</span>
              <span className="inter-extra-bold-black-40px">{spanText2}</span>
            </div>
            <div className="mins-waiting-3 inter-extra-bold-black-25px-2">{minsWaiting}</div>
            <img className="line-1-11" src={line1} />
            <div className="seans-restaurant-14 inter-extra-bold-black-25px">{seansRestaurant}</div>
            <div className="x120m-6 inter-thin-black-18px">{x120M}</div>
            <img className="line-4-6" src={line4} />
            <img className="line-5-6" src={line5} />
            <div className="text-23 inter-thin-black-18px">{text23}</div>
            <div className="number-124 inter-extra-bold-apple-24px">{number}</div>
            <img className="icon-star-116" src={iconStar} />
          </div>
        </div>
        <div className="overlap-group9-9">
          <div className="overlap-group11-8">
            <img className="line-9-6" src={line9} />
            <div className="overlap-group10-8 inter-light-black-28px">
              <div className="line-container-21">
                <img className="line-12-6" src={line12} />
                <img className="line-15" src={line15} />
                <img className="line-16" src={line16} />
              </div>
              <div className="overlap-group7-14">
                <img className="line-13-6" src={line13} />
                <img className="line-14-6" src={line14} />
                <Group273 className={group273Props.className} />
              </div>
              <div className="vongole-shrimp-pasta">{vongoleShrimpPasta}</div>
              <div className="beef-rice-noodle">{beefRiceNoodle}</div>
              <div className="grill-steak-salad">{grillSteakSalad}</div>
            </div>
          </div>
          <div className="overlap-group-240">
            <div className="menu-9 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-20">
            <Link to="/sean-s-details-info" className="align-self-flex-center">
              <div className="group-20-6">
                <div className="overlap-group1-95">
                  <div className="info-21 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-review">
              <div className="group-21-6">
                <div className="overlap-group3-82">
                  <div className="rectangle-39-9"></div>
                  <div className="review-15 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-map" className="align-self-flex-end">
              <div className="group-22-6">
                <div className="overlap-group2-75">
                  <div className="map-9 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeansDetailsMenu1;
