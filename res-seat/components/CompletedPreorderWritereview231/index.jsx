import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import Group67 from "../Group67";
import "./CompletedPreorderWritereview231.css";

function CompletedPreorderWritereview231(props) {
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completed-preorder-writereview2-44 screen">
        <div className="flex-row-139">
          <div className="review-46 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-62" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group6-38">
          <img className="line-2-52" src={line2} />
          <div className="overlap-group2-162">
            <img className="food-1-34" src={food1} />
            <div className="how-was-the-food-34 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-59 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-62-12">
            <img className="icon-star-248" src={iconStar1} />
            <img className="icon-star-249" src={iconStar2} />
            <img className="icon-star-250" src={iconStar3} />
            <img className="icon-star-247" src={iconStar4} />
            <img className="icon-star-247" src={iconStar5} />
          </div>
        </div>
        <Group58 />
        <div className="group-61-25">
          <div className="overlap-group4-92 border-1px-silver">
            <img className="icon-camera-40" src={iconCamera} />
            <div className="photo-05-31 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo05}</div>
          </div>
        </div>
        <img className="line-3-51" src={line3} />
        <Group67 />
        <div className="group-container-75">
          <Link to="/restaurant-details-review">
            <div className="group-46-32">
              <div className="overlap-group1-250">
                <div className="submit-review-34 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completed-preorder-writereview-home-11">
            <div className="group-45-3">
              <div className="overlap-group-415">
                <div className="cancel-34 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview231;
