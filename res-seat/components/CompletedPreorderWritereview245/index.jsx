import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import Frame3 from "../Frame3";
import "./CompletedPreorderWritereview245.css";

function CompletedPreorderWritereview245(props) {
  const {
    review,
    iconClose1,
    line2,
    food1,
    howWasTheFood,
    hanamBbq,
    iconStar1,
    iconStar2,
    iconStar3,
    iconStar4,
    iconStar5,
    porkBellyG3D0983C26_19201,
    iconClose2,
    iconCamera,
    photo15,
    line3,
    submitReview,
    cancel,
    frame3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereview243 screen">
        <div className="flex-row-325">
          <div className="review-61 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-145" src={iconClose1} />
          </Link>
        </div>
        <div className="overlap-group7-31">
          <img className="line-2-110" src={line2} />
          <div className="overlap-group2-217">
            <img className="food-1-49" src={food1} />
            <div className="how-was-the-food-49 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-76 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-70-2">
            <Link to="/completedpreorderwritereview231">
              <img className="icon-star-384" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview232">
              <img className="icon-star-385" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview233">
              <img className="icon-star-386" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview234">
              <img className="icon-star-383" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview235">
              <img className="icon-star-383" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <div className="overlap-group-container-48">
          <div className="overlap-group6-57">
            <img className="pork-belly-g3d0983c26_1920-1-11" src={porkBellyG3D0983C26_19201} />
            <div className="ellipse-20-30 border-1px-orange"></div>
            <Link to="/completedpreorderwritereview238">
              <img className="icon-close-146" src={iconClose2} />
            </Link>
          </div>
          <div className="overlap-group4-137 border-1px-silver">
            <img className="icon-camera-49" src={iconCamera} />
            <div className="photo-15-13 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo15}</div>
          </div>
        </div>
        <img className="line-3-74" src={line3} />
        <Frame3 component1Props={frame3Props.component1Props} />
        <div className="group-container-104">
          <Link to="/restaurant-details-review">
            <div className="group-46-46">
              <div className="overlap-group1-329">
                <div className="submit-review-49 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completed-preorder-writereview-home-11">
            <div className="group-45-18">
              <div className="overlap-group-627">
                <div className="cancel-49 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview245;
