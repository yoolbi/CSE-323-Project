import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview213.css";

function CompletedPreorderWritereview213(props) {
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
      <div className="completedpreorderwritereview212 screen">
        <div className="flex-row-111">
          <div className="review-26 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-32" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-52">
          <img className="line-2-27" src={line2} />
          <div className="overlap-group2-136">
            <img className="food-1-15" src={food1} />
            <div className="how-was-the-food-15 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-29 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-66-1">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-171" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-172" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-173" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-170" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-170" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <Link to="/completedpreorderwritereview222" className="align-self-flex-start">
          <div className="group-61-22">
            <div className="overlap-group4-79 border-1px-silver">
              <img className="icon-camera-32" src={iconCamera} />
              <div className="photo-05-28 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo05}</div>
            </div>
          </div>
        </Link>
        <img className="line-3-31" src={line3} />
        <div className="group-container-51">
          <Link to="/main">
            <div className="group-46-14">
              <div className="overlap-group1-209">
                <div className="submit-review-15 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-364">
            <div className="cancel-15 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview213;
