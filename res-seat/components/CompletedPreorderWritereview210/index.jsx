import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview210.css";

function CompletedPreorderWritereview210(props) {
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
      <div className="completedpreorderwritereview29 screen">
        <div className="flex-row-55">
          <div className="review-20 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-17" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-34">
          <img className="line-2-13" src={line2} />
          <div className="overlap-group2-88">
            <img className="food-1-10" src={food1} />
            <div className="how-was-the-food-10 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-30 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-62-5">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-137" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-138" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-139" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-136" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-136" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <Link to="/completedpreorderwritereview24" className="align-self-flex-start">
          <div className="group-61-19">
            <div className="overlap-group4-54 border-1px-silver">
              <img className="icon-camera-29" src={iconCamera} />
              <div className="photo-05-25 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo05}</div>
            </div>
          </div>
        </Link>
        <img className="line-3-14" src={line3} />
        <div className="group-container-31">
          <Link to="/main">
            <div className="group-46-10">
              <div className="overlap-group1-116">
                <div className="submit-review-10 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-262">
            <div className="cancel-10 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview210;
