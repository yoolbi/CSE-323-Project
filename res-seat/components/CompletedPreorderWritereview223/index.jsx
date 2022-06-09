import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview223.css";

function CompletedPreorderWritereview223(props) {
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
      <div className="completedpreorderwritereview222 screen">
        <div className="flex-row-128">
          <div className="review-37 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-48" src={iconClose1} />
          </Link>
        </div>
        <div className="overlap-group5-62">
          <img className="line-2-41" src={line2} />
          <div className="overlap-group2-148">
            <img className="food-1-25" src={food1} />
            <div className="how-was-the-food-25 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-35 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-65-6">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-212" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-213" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-214" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-211" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-211" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <div className="overlap-group-container-39">
          <div className="overlap-group6-35">
            <img className="vietnam-ge454524b0_1920-2-2" src={vietnamGe454524B0_19202} />
            <div className="ellipse-20-21 border-1px-orange"></div>
            <Link to="/completedpreorderwritereview212">
              <img className="icon-close-49" src={iconClose2} />
            </Link>
          </div>
          <div className="overlap-group4-87 border-1px-silver">
            <img className="icon-camera-37" src={iconCamera} />
            <div className="photo-15-7 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo15}</div>
          </div>
        </div>
        <img className="line-3-41" src={line3} />
        <div className="group-container-65">
          <Link to="/main">
            <div className="group-46-24">
              <div className="overlap-group1-222">
                <div className="submit-review-25 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-380">
            <div className="cancel-25 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview223;
