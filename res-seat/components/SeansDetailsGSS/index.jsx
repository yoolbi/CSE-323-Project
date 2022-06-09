import React from "react";
import { Link } from "react-router-dom";
import Component32 from "../Component32";
import Group2622 from "../Group2622";
import "./SeansDetailsGSS.css";

function SeansDetailsGSS(props) {
  const {
    x1,
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
    number,
    component32Props,
    group2622Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sean-s-details-gss screen">
        <div className="overlap-group6-68">
          <img className="x1-52" src={x1} />
          <Component32 overlapGroup4={component32Props.overlapGroup4} />
          <a href="javascript:history.back()">
            <img className="vector-330" src="/img/vector-6@2x.png" />
          </a>
        </div>
        <div className="overlap-group9-37">
          <div className="overlap-group11-18">
            <img className="line-9-24" src={line9} />
            <div className="overlap-group10-28">
              <div className="line-container-64">
                <img className="line-12-24" src={line12} />
                <img className="line-15-18" src={line15} />
                <img className="line-16-18" src={line16} />
              </div>
              <div className="line-container-65">
                <img className="line-13-24" src={line13} />
                <img className="line-14-24" src={line14} />
              </div>
              <Link to="/menu-detail1vongole2">
                <div className="vongole-shrimp-pasta-7 inter-light-black-28px">{vongoleShrimpPasta}</div>
              </Link>
              <Link to="/menu-detail2noodle2">
                <div className="beef-rice-noodle-7 inter-light-black-28px">{beefRiceNoodle}</div>
              </Link>
              <div className="grill-steak-salad-7 inter-light-flamingo-28px">{grillSteakSalad}</div>
            </div>
          </div>
          <div className="overlap-group-829">
            <div className="menu-86 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-134">
            <Link to="/sean-s-details-info" className="align-self-flex-center">
              <div className="group-20-21">
                <div className="overlap-group1-510">
                  <div className="info-63 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-review">
              <div className="group-21-21">
                <div className="overlap-group3-272">
                  <div className="rectangle-39-27"></div>
                  <div className="review-78 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-map" className="align-self-flex-end">
              <div className="group-22-21">
                <div className="overlap-group2-380">
                  <div className="map-27 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="overlap-group5-129">
          <Group2622 src={group2622Props.src} />
          <div className="number-229 inter-medium-derby-22px">{number}</div>
        </div>
      </div>
    </div>
  );
}

export default SeansDetailsGSS;
