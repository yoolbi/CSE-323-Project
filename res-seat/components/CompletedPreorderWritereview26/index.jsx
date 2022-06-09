import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview26.css";

function CompletedPreorderWritereview26(props) {
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
      <div className="completedpreorderwritereview25 screen">
        <div className="flex-row-51">
          <div className="review-16 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-13" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-30">
          <img className="line-2-9" src={line2} />
          <div className="overlap-group2-84">
            <img className="food-1-6" src={food1} />
            <div className="how-was-the-food-6 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-26 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-72">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-121" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-122" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-123" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-120" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-120" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <Link to="/completed-preorder-writereview2-29" className="align-self-flex-start">
          <div className="group-61-15">
            <div className="overlap-group4-50 border-1px-silver">
              <img className="icon-camera-25" src={iconCamera} />
              <div className="photo-05-21 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo05}</div>
            </div>
          </div>
        </Link>
        <img className="line-3-10" src={line3} />
        <div className="group-container-27">
          <Link to="/main">
            <div className="group-46-6">
              <div className="overlap-group1-112">
                <div className="submit-review-6 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-258">
            <div className="cancel-6 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview26;
