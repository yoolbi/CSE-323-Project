import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview27.css";

function CompletedPreorderWritereview27(props) {
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
      <div className="completedpreorderwritereview26 screen">
        <div className="flex-row-52">
          <div className="review-17 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-14" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-31">
          <img className="line-2-10" src={line2} />
          <div className="overlap-group2-85">
            <img className="food-1-7" src={food1} />
            <div className="how-was-the-food-7 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-27 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-69">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-125" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-126" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-127" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-124" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-124" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <Link to="/completedpreorderwritereview2" className="align-self-flex-start">
          <div className="group-61-16">
            <div className="overlap-group4-51 border-1px-silver">
              <img className="icon-camera-26" src={iconCamera} />
              <div className="photo-05-22 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo05}</div>
            </div>
          </div>
        </Link>
        <img className="line-3-11" src={line3} />
        <div className="group-container-28">
          <Link to="/main">
            <div className="group-46-7">
              <div className="overlap-group1-113">
                <div className="submit-review-7 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-259">
            <div className="cancel-7 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview27;
