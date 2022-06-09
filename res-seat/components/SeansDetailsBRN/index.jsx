import React from "react";
import { Link } from "react-router-dom";
import Component32 from "../Component32";
import Group2622 from "../Group2622";
import "./SeansDetailsBRN.css";

function SeansDetailsBRN(props) {
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
      <div className="sean-s-details-brn screen">
        <div className="overlap-group8-31">
          <img className="x1-51" src={x1} />
          <Component32 overlapGroup4={component32Props.overlapGroup4} />
          <a href="javascript:history.back()">
            <img className="vector-321" src="/img/vector-6@2x.png" />
          </a>
        </div>
        <div className="overlap-group9-36">
          <div className="overlap-group11-17">
            <img className="line-9-23" src={line9} />
            <div className="overlap-group10-27">
              <div className="line-container-62">
                <img className="line-12-23" src={line12} />
                <img className="line-15-17" src={line15} />
                <img className="line-16-17" src={line16} />
              </div>
              <div className="line-container-63">
                <img className="line-13-23" src={line13} />
                <img className="line-14-23" src={line14} />
              </div>
              <Link to="/menu-detail1vongole">
                <div className="vongole-shrimp-pasta-6 inter-light-black-28px">{vongoleShrimpPasta}</div>
              </Link>
              <div className="beef-rice-noodle-6 inter-light-flamingo-28px">{beefRiceNoodle}</div>
              <Link to="/menu-detail3salad2">
                <div className="grill-steak-salad-6 inter-light-black-28px">{grillSteakSalad}</div>
              </Link>
            </div>
          </div>
          <div className="overlap-group-821">
            <div className="menu-85 inter-normal-white-24px">{menu}</div>
          </div>
          <div className="group-container-133">
            <Link to="/sean-s-details-info" className="align-self-flex-center">
              <div className="group-20-20">
                <div className="overlap-group1-509">
                  <div className="info-62 inter-thin-black-24px">{info}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-review">
              <div className="group-21-20">
                <div className="overlap-group3-263">
                  <div className="rectangle-39-26"></div>
                  <div className="review-77 inter-thin-black-24px">{review}</div>
                </div>
              </div>
            </Link>
            <Link to="/sean-s-details-map" className="align-self-flex-end">
              <div className="group-22-20">
                <div className="overlap-group2-379">
                  <div className="map-26 inter-thin-black-24px">{map}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="overlap-group5-128">
          <Group2622 src={group2622Props.src} />
          <div className="number-228 inter-medium-derby-22px">{number}</div>
        </div>
      </div>
    </div>
  );
}

export default SeansDetailsBRN;
