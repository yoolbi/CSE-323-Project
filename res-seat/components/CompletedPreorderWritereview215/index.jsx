import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview215.css";

function CompletedPreorderWritereview215(props) {
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
      <div className="completedpreorderwritereview214 screen">
        <div className="flex-row-113">
          <div className="review-28 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-34" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-54">
          <img className="line-2-29" src={line2} />
          <div className="overlap-group2-138">
            <img className="food-1-17" src={food1} />
            <div className="how-was-the-food-17 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-31 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-62-9">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-179" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-180" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-181" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-178" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-178" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <Link to="/completedpreorderwritereview229" className="align-self-flex-start">
          <div className="group-61-24">
            <div className="overlap-group4-81 border-1px-silver">
              <img className="icon-camera-34" src={iconCamera} />
              <div className="photo-05-30 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo05}</div>
            </div>
          </div>
        </Link>
        <img className="line-3-33" src={line3} />
        <div className="group-container-53">
          <Link to="/main">
            <div className="group-46-16">
              <div className="overlap-group1-211">
                <div className="submit-review-17 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-366">
            <div className="cancel-17 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview215;
