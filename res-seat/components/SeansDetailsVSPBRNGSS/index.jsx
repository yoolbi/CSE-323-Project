import React from "react";
import { Link } from "react-router-dom";
import Component32 from "../Component32";
import Group2622 from "../Group2622";
import "./SeansDetailsVSPBRNGSS.css";

function SeansDetailsVSPBRNGSS(props) {
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
      <div className="sean-s-details-vsp-brn-gss screen">
        <div className="overlap-group5-116">
          <img className="x1-40" src={x1} />
          <Component32 overlapGroup4={component32Props.overlapGroup4} />
          <a href="javascript:history.back()">
            <img className="vector-264" src="/img/vector-6@2x.png" />
          </a>
        </div>
        <div className="overlap-group9-25">
          <div className="overlap-group11-12">
            <img className="line-9-12" src={line9} />
            <div className="overlap-group10-16 inter-light-flamingo-28px">
              <div className="line-container-40">
                <img className="line-12-12" src={line12} />
                <img className="line-15-6" src={line15} />
                <img className="line-16-6" src={line16} />
              </div>
              <div className="line-container-41">
                <img className="line-13-12" src={line13} />
                <img className="line-14-12" src={line14} />
              </div>
              <div className="vongole-shrimp-pasta-1">{vongoleShrimpPasta}</div>
              <div className="beef-rice-noodle-1">{beefRiceNoodle}</div>
              <div className="grill-steak-salad-1">{grillSteakSalad}</div>
            </div>
          </div>
          <div className="overlap-group-720">
            <div className="menu-72 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-118">
            <Link to="/sean-s-details-info" className="align-self-flex-center">
              <div className="group-20-10">
                <div className="overlap-group1-462">
                  <div className="info-51 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-review">
              <div className="group-21-10">
                <div className="overlap-group3-204">
                  <div className="rectangle-39-15"></div>
                  <div className="review-66 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-map" className="align-self-flex-end">
              <div className="group-22-10">
                <div className="overlap-group2-312">
                  <div className="map-15 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="overlap-group8-23">
          <Group2622 src={group2622Props.src} />
          <div className="number-204 inter-medium-derby-22px">{number}</div>
        </div>
      </div>
    </div>
  );
}

export default SeansDetailsVSPBRNGSS;
