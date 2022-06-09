import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview214.css";

function CompletedPreorderWritereview214(props) {
  const {
    review,
    iconClose,
    line2,
    food1,
    howWasTheFood,
    uncles,
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
      <div className="completedpreorderwritereview213 screen">
        <div className="flex-row-112">
          <div className="review-27 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-33" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-53">
          <img className="line-2-28" src={line2} />
          <div className="overlap-group2-137">
            <img className="food-1-16" src={food1} />
            <div className="how-was-the-food-16 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-30 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-63-18">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-175" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-176" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-177" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-174" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-174" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <Link to="/completedpreorderwritereview223" className="align-self-flex-start">
          <div className="group-61-23">
            <div className="overlap-group4-80 border-1px-silver">
              <img className="icon-camera-33" src={iconCamera} />
              <div className="photo-05-29 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo05}</div>
            </div>
          </div>
        </Link>
        <img className="line-3-32" src={line3} />
        <div className="group-container-52">
          <Link to="/main">
            <div className="group-46-15">
              <div className="overlap-group1-210">
                <div className="submit-review-16 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-365">
            <div className="cancel-16 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview214;
