import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview222.css";

function CompletedPreorderWritereview222(props) {
  const {
    review,
    iconClose1,
    line2,
    food1,
    howWasTheFood,
    uncles,
    iconStar1,
    iconStar2,
    iconStar3,
    iconStar4,
    iconStar5,
    vietnamGe454524B0_19202,
    iconClose2,
    iconCamera,
    photo15,
    line3,
    submitReview,
    cancel,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereview221 screen">
        <div className="flex-row-127">
          <div className="review-36 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-46" src={iconClose1} />
          </Link>
        </div>
        <div className="overlap-group6-34">
          <img className="line-2-40" src={line2} />
          <div className="overlap-group2-147">
            <img className="food-1-24" src={food1} />
            <div className="how-was-the-food-24 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-34 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-70-1">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-208" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-209" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-210" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-207" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-207" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <div className="overlap-group-container-38">
          <div className="overlap-group5-61">
            <img className="vietnam-ge454524b0_1920-2-1" src={vietnamGe454524B0_19202} />
            <div className="ellipse-20-20 border-1px-orange"></div>
            <Link to="/completedpreorderwritereview211">
              <img className="icon-close-47" src={iconClose2} />
            </Link>
          </div>
          <div className="overlap-group4-86 border-1px-silver">
            <img className="icon-camera-36" src={iconCamera} />
            <div className="photo-15-6 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo15}</div>
          </div>
        </div>
        <img className="line-3-40" src={line3} />
        <div className="group-container-64">
          <Link to="/main">
            <div className="group-46-23">
              <div className="overlap-group1-221">
                <div className="submit-review-24 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-379">
            <div className="cancel-24 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview222;
