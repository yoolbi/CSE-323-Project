import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview212.css";

function CompletedPreorderWritereview212(props) {
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
      <div className="completedpreorderwritereview211 screen">
        <div className="flex-row-110">
          <div className="review-25 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-31" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-51">
          <img className="line-2-26" src={line2} />
          <div className="overlap-group2-135">
            <img className="food-1-14" src={food1} />
            <div className="how-was-the-food-14 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-28 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-69-1">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-167" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-168" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-169" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-166" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-166" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <Link to="/completedpreorderwritereview221" className="align-self-flex-start">
          <div className="group-61-21">
            <div className="overlap-group4-78 border-1px-silver">
              <img className="icon-camera-31" src={iconCamera} />
              <div className="photo-05-27 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo05}</div>
            </div>
          </div>
        </Link>
        <img className="line-3-30" src={line3} />
        <div className="group-container-50">
          <Link to="/main">
            <div className="group-46-13">
              <div className="overlap-group1-208">
                <div className="submit-review-14 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-363">
            <div className="cancel-14 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview212;
