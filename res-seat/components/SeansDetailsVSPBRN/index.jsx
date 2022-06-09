import React from "react";
import { Link } from "react-router-dom";
import Component32 from "../Component32";
import Group2622 from "../Group2622";
import "./SeansDetailsVSPBRN.css";

function SeansDetailsVSPBRN(props) {
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
      <div className="sean-s-details-vsp-brn screen">
        <div className="overlap-group7-34">
          <img className="x1-41" src={x1} />
          <Component32 overlapGroup4={component32Props.overlapGroup4} className={component32Props.className} />
          <a href="javascript:history.back()">
            <img className="vector-267" src="/img/vector-6@2x.png" />
          </a>
        </div>
        <div className="overlap-group9-26">
          <div className="overlap-group11-13">
            <img className="line-9-13" src={line9} />
            <div className="overlap-group10-17">
              <div className="line-container-42">
                <img className="line-12-13" src={line12} />
                <img className="line-15-7" src={line15} />
                <img className="line-16-7" src={line16} />
              </div>
              <div className="line-container-43">
                <img className="line-13-13" src={line13} />
                <img className="line-14-13" src={line14} />
              </div>
              <div className="vongole-shrimp-pasta-2 inter-light-flamingo-28px">{vongoleShrimpPasta}</div>
              <div className="beef-rice-noodle-2 inter-light-flamingo-28px">{beefRiceNoodle}</div>
              <Link to="/menu-detail3-salad-3">
                <div className="grill-steak-salad-2 inter-light-black-28px">{grillSteakSalad}</div>
              </Link>
            </div>
          </div>
          <div className="overlap-group-730">
            <div className="menu-73 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-119">
            <Link to="/sean-s-details-info" className="align-self-flex-center">
              <div className="group-20-11">
                <div className="overlap-group1-470">
                  <div className="info-52 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-review">
              <div className="group-21-11">
                <div className="overlap-group3-207">
                  <div className="rectangle-39-16"></div>
                  <div className="review-67 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-map" className="align-self-flex-end">
              <div className="group-22-11">
                <div className="overlap-group2-320">
                  <div className="map-16 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="overlap-group5-117">
          <Group2622 src={group2622Props.src} />
          <div className="number-212 inter-medium-derby-22px">{number}</div>
        </div>
      </div>
    </div>
  );
}

export default SeansDetailsVSPBRN;
