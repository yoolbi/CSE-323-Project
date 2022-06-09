import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import Frame3 from "../Frame3";
import "./CompletedPreorderWritereview241.css";

function CompletedPreorderWritereview241(props) {
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
      <div className="completedpreorderwritereview239 screen">
        <div className="flex-row-274">
          <div className="review-57 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-136" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group6-52">
          <img className="line-2-88" src={line2} />
          <div className="overlap-group2-204">
            <img className="food-1-45" src={food1} />
            <div className="how-was-the-food-45 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-72 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-72-2">
            <Link to="/completedpreorderwritereview231">
              <img className="icon-star-368" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview232">
              <img className="icon-star-369" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview233">
              <img className="icon-star-370" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview234">
              <img className="icon-star-367" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview235">
              <img className="icon-star-367" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <Link to="/completedpreorderwritereview244" className="align-self-flex-start">
          <div className="group-61-30">
            <div className="overlap-group4-120 border-1px-silver">
              <img className="icon-camera-45" src={iconCamera} />
              <div className="photo-05-36 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo05}</div>
            </div>
          </div>
        </Link>
        <img className="line-3-68" src={line3} />
        <Frame3 component1Props={frame3Props.component1Props} />
        <div className="group-container-98">
          <Link to="/restaurant-details-review">
            <div className="group-46-42">
              <div className="overlap-group1-321">
                <div className="submit-review-45 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completed-preorder-writereview-home-11">
            <div className="group-45-14">
              <div className="overlap-group-605">
                <div className="cancel-45 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview241;
