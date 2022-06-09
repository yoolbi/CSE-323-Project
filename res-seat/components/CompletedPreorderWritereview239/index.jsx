import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import Frame3 from "../Frame3";
import "./CompletedPreorderWritereview239.css";

function CompletedPreorderWritereview239(props) {
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
      <div className="completedpreorderwritereview237 screen">
        <div className="flex-row-271">
          <div className="review-55 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-133" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group6-50">
          <img className="line-2-85" src={line2} />
          <div className="overlap-group2-202">
            <img className="food-1-43" src={food1} />
            <div className="how-was-the-food-43 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-70 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-66-2">
            <Link to="/completedpreorderwritereview231">
              <img className="icon-star-360" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview232">
              <img className="icon-star-361" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview233">
              <img className="icon-star-362" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview234">
              <img className="icon-star-359" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview235">
              <img className="icon-star-359" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <Link to="/completedpreorderwritereview242" className="align-self-flex-start">
          <div className="group-61-28">
            <div className="overlap-group4-117 border-1px-silver">
              <img className="icon-camera-43" src={iconCamera} />
              <div className="photo-05-34 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo05}</div>
            </div>
          </div>
        </Link>
        <img className="line-3-65" src={line3} />
        <Frame3 component1Props={frame3Props.component1Props} />
        <div className="group-container-95">
          <Link to="/restaurant-details-review">
            <div className="group-46-40">
              <div className="overlap-group1-318">
                <div className="submit-review-43 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completed-preorder-writereview-home-11">
            <div className="group-45-12">
              <div className="overlap-group-602">
                <div className="cancel-43 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview239;
