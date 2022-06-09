import React from "react";
import { Link } from "react-router-dom";
import Component32 from "../Component32";
import "./SeansDetailsGSSVSP.css";

function SeansDetailsGSSVSP(props) {
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
    iconCart,
    number,
    component32Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sean-s-details-gss-vsp screen">
        <div className="overlap-group7-35">
          <img className="x1-42" src={x1} />
          <Component32 overlapGroup4={component32Props.overlapGroup4} />
          <a href="javascript:history.back()">
            <img className="vector-268" src="/img/vector-6@2x.png" />
          </a>
        </div>
        <div className="overlap-group9-27">
          <div className="overlap-group11-14">
            <img className="line-9-14" src={line9} />
            <div className="overlap-group10-18">
              <div className="line-container-44">
                <img className="line-12-14" src={line12} />
                <img className="line-15-8" src={line15} />
                <img className="line-16-8" src={line16} />
              </div>
              <div className="line-container-45">
                <img className="line-13-14" src={line13} />
                <img className="line-14-14" src={line14} />
              </div>
              <div className="vongole-shrimp-pasta-3 inter-light-flamingo-28px">{vongoleShrimpPasta}</div>
              <Link to="/menu-detail2-noodle-3">
                <div className="beef-rice-noodle-3 inter-light-black-28px">{beefRiceNoodle}</div>
              </Link>
              <div className="grill-steak-salad-3 inter-light-flamingo-28px">{grillSteakSalad}</div>
            </div>
          </div>
          <div className="overlap-group-731">
            <div className="menu-74 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-120">
            <Link to="/sean-s-details-info" className="align-self-flex-center">
              <div className="group-20-12">
                <div className="overlap-group1-471">
                  <div className="info-53 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-review">
              <div className="group-21-12">
                <div className="overlap-group3-208">
                  <div className="rectangle-39-17"></div>
                  <div className="review-68 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-map" className="align-self-flex-end">
              <div className="group-22-12">
                <div className="overlap-group2-321">
                  <div className="map-17 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="overlap-group8-24">
          <div className="group-26-2">
            <img className="icon-cart-13" src={iconCart} />
          </div>
          <div className="number-213 inter-medium-derby-22px">{number}</div>
        </div>
      </div>
    </div>
  );
}

export default SeansDetailsGSSVSP;
