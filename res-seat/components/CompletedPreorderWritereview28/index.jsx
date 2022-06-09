import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview28.css";

function CompletedPreorderWritereview28(props) {
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
      <div className="completedpreorderwritereview27 screen">
        <div className="flex-row-53">
          <div className="review-18 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-15" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-32">
          <img className="line-2-11" src={line2} />
          <div className="overlap-group2-86">
            <img className="food-1-8" src={food1} />
            <div className="how-was-the-food-8 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-28 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-66">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-129" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-130" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-131" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-128" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-128" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <Link to="/completedpreorderwritereview22" className="align-self-flex-start">
          <div className="group-61-17">
            <div className="overlap-group4-52 border-1px-silver">
              <img className="icon-camera-27" src={iconCamera} />
              <div className="photo-05-23 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo05}</div>
            </div>
          </div>
        </Link>
        <img className="line-3-12" src={line3} />
        <div className="group-container-29">
          <Link to="/main">
            <div className="group-46-8">
              <div className="overlap-group1-114">
                <div className="submit-review-8 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-260">
            <div className="cancel-8 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview28;
