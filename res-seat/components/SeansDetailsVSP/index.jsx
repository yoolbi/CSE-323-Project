import React from "react";
import { Link } from "react-router-dom";
import Component32 from "../Component32";
import Group2622 from "../Group2622";
import "./SeansDetailsVSP.css";

function SeansDetailsVSP(props) {
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
      <div className="sean-s-details-vsp screen">
        <div className="overlap-group7-40">
          <img className="x1-50" src={x1} />
          <Component32 overlapGroup4={component32Props.overlapGroup4} className={component32Props.className} />
          <a href="javascript:history.back()">
            <img className="vector-317" src="/img/vector-6@2x.png" />
          </a>
        </div>
        <div className="overlap-group9-35">
          <div className="overlap-group11-16">
            <img className="line-9-22" src={line9} />
            <div className="overlap-group10-26">
              <div className="line-container-60">
                <img className="line-12-22" src={line12} />
                <img className="line-15-16" src={line15} />
                <img className="line-16-16" src={line16} />
              </div>
              <div className="line-container-61">
                <img className="line-13-22" src={line13} />
                <img className="line-14-22" src={line14} />
              </div>
              <div className="vongole-shrimp-pasta-5 inter-light-flamingo-28px">{vongoleShrimpPasta}</div>
              <Link to="/menu-detail2noodle">
                <div className="beef-rice-noodle-5 inter-light-black-28px">{beefRiceNoodle}</div>
              </Link>
              <Link to="/menu-detail3salad">
                <div className="grill-steak-salad-5 inter-light-black-28px">{grillSteakSalad}</div>
              </Link>
            </div>
          </div>
          <div className="overlap-group-817">
            <div className="menu-84 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-132">
            <Link to="/sean-s-details-info" className="align-self-flex-center">
              <div className="group-20-19">
                <div className="overlap-group1-508">
                  <div className="info-61 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-review">
              <div className="group-21-19">
                <div className="overlap-group3-259">
                  <div className="rectangle-39-25"></div>
                  <div className="review-76 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-map" className="align-self-flex-end">
              <div className="group-22-19">
                <div className="overlap-group2-378">
                  <div className="map-25 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="overlap-group5-127">
          <Group2622 src={group2622Props.src} />
          <div className="number-227 inter-medium-derby-22px">{number}</div>
        </div>
      </div>
    </div>
  );
}

export default SeansDetailsVSP;
