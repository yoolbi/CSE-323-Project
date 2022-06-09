import React from "react";
import { Link } from "react-router-dom";
import Component32 from "../Component32";
import "./SeansDetailsBRNGSS.css";

function SeansDetailsBRNGSS(props) {
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
      <div className="sean-s-details-brn-gss screen">
        <div className="overlap-group7-36">
          <img className="x1-43" src={x1} />
          <Component32 overlapGroup4={component32Props.overlapGroup4} />
          <a href="javascript:history.back()">
            <img className="vector-269" src="/img/vector-6@2x.png" />
          </a>
        </div>
        <div className="overlap-group9-28">
          <div className="overlap-group11-15">
            <img className="line-9-15" src={line9} />
            <div className="overlap-group10-19">
              <div className="line-container-46">
                <img className="line-12-15" src={line12} />
                <img className="line-15-9" src={line15} />
                <img className="line-16-9" src={line16} />
              </div>
              <div className="line-container-47">
                <img className="line-13-15" src={line13} />
                <img className="line-14-15" src={line14} />
              </div>
              <Link to="/menu-detail1-vongole-3">
                <div className="vongole-shrimp-pasta-4 inter-light-black-28px">{vongoleShrimpPasta}</div>
              </Link>
              <div className="beef-rice-noodle-4 inter-light-flamingo-28px">{beefRiceNoodle}</div>
              <div className="grill-steak-salad-4 inter-light-flamingo-28px">{grillSteakSalad}</div>
            </div>
          </div>
          <div className="overlap-group-732">
            <div className="menu-75 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-121">
            <Link to="/sean-s-details-info" className="align-self-flex-center">
              <div className="group-20-13">
                <div className="overlap-group1-472">
                  <div className="info-54 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-review">
              <div className="group-21-13">
                <div className="overlap-group3-209">
                  <div className="rectangle-39-18"></div>
                  <div className="review-69 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-map" className="align-self-flex-end">
              <div className="group-22-13">
                <div className="overlap-group2-322">
                  <div className="map-18 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="overlap-group5-118">
          <div className="group-26-3">
            <img className="icon-cart-14" src={iconCart} />
          </div>
          <div className="number-214 inter-medium-derby-22px">{number}</div>
        </div>
      </div>
    </div>
  );
}

export default SeansDetailsBRNGSS;
