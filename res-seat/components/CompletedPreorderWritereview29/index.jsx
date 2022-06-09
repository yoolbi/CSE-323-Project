import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview29.css";

function CompletedPreorderWritereview29(props) {
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
      <div className="completedpreorderwritereview28 screen">
        <div className="flex-row-54">
          <div className="review-19 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-16" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-33">
          <img className="line-2-12" src={line2} />
          <div className="overlap-group2-87">
            <img className="food-1-9" src={food1} />
            <div className="how-was-the-food-9 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-29 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-63-9">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-133" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-134" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-135" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-132" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-132" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <Link to="/completedpreorderwritereview23" className="align-self-flex-start">
          <div className="group-61-18">
            <div className="overlap-group4-53 border-1px-silver">
              <img className="icon-camera-28" src={iconCamera} />
              <div className="photo-05-24 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo05}</div>
            </div>
          </div>
        </Link>
        <img className="line-3-13" src={line3} />
        <div className="group-container-30">
          <Link to="/main">
            <div className="group-46-9">
              <div className="overlap-group1-115">
                <div className="submit-review-9 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-261">
            <div className="cancel-9 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview29;
