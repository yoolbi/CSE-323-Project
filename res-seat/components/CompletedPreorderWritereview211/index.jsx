import React from "react";
import { Link } from "react-router-dom";
import Group582 from "../Group582";
import "./CompletedPreorderWritereview211.css";

function CompletedPreorderWritereview211(props) {
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
      <div className="completedpreorderwritereview210 screen">
        <div className="flex-row-109">
          <div className="review-24 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-30" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-50">
          <img className="line-2-25" src={line2} />
          <div className="overlap-group2-134">
            <img className="food-1-13" src={food1} />
            <div className="how-was-the-food-13 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-27 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-72-1">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-163" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-164" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-165" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-162" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-162" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group582 />
        <Link to="/completedpreorderwritereview220" className="align-self-flex-start">
          <div className="group-61-20">
            <div className="overlap-group4-77 border-1px-silver">
              <img className="icon-camera-30" src={iconCamera} />
              <div className="photo-05-26 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo05}</div>
            </div>
          </div>
        </Link>
        <img className="line-3-29" src={line3} />
        <div className="group-container-49">
          <Link to="/main">
            <div className="group-46-12">
              <div className="overlap-group1-207">
                <div className="submit-review-13 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-362">
            <div className="cancel-13 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview211;
