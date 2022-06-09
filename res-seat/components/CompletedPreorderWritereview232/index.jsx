import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import Frame3 from "../Frame3";
import "./CompletedPreorderWritereview232.css";

function CompletedPreorderWritereview232(props) {
  const {
    review,
    iconClose,
    line2,
    food1,
    howWasTheFood,
    hanamBbq,
    iconStar1,
    iconStar2,
    iconStar3,
    iconStar4,
    iconStar5,
    iconCamera,
    photo05,
    line3,
    submitReview,
    cancel,
    frame3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereview230 screen">
        <div className="flex-row-258">
          <div className="review-48 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-97" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group6-44">
          <img className="line-2-76" src={line2} />
          <div className="overlap-group2-186">
            <img className="food-1-36" src={food1} />
            <div className="how-was-the-food-36 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-63 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-62-15">
            <Link to="/completedpreorderwritereview231">
              <img className="icon-star-332" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview232">
              <img className="icon-star-333" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview233">
              <img className="icon-star-334" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview234">
              <img className="icon-star-331" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview235">
              <img className="icon-star-331" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <Link to="/completedpreorderwritereview240" className="align-self-flex-start">
          <div className="group-61-26">
            <div className="overlap-group4-114 border-1px-silver">
              <img className="icon-camera-41" src={iconCamera} />
              <div className="photo-05-32 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo05}</div>
            </div>
          </div>
        </Link>
        <img className="line-3-58" src={line3} />
        <Frame3 component1Props={frame3Props.component1Props} />
        <div className="group-container-88">
          <Link to="/restaurant-details-review">
            <div className="group-46-33">
              <div className="overlap-group1-311">
                <div className="submit-review-36 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completed-preorder-writereview-home-11">
            <div className="group-45-4">
              <div className="overlap-group-593">
                <div className="cancel-36 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview232;
