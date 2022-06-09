import React from "react";
import { Link } from "react-router-dom";
import Group582 from "../Group582";
import "./CompletedPreorderWritereview221.css";

function CompletedPreorderWritereview221(props) {
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
      <div className="completedpreorderwritereview220 screen">
        <div className="flex-row-126">
          <div className="review-35 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-44" src={iconClose1} />
          </Link>
        </div>
        <div className="overlap-group6-33">
          <img className="line-2-39" src={line2} />
          <div className="overlap-group2-146">
            <img className="food-1-23" src={food1} />
            <div className="how-was-the-food-23 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-33 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-73-1">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-204" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-205" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-206" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-203" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-203" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group582 />
        <div className="overlap-group-container-37">
          <div className="overlap-group5-60">
            <img className="vietnam-ge454524b0_1920-2" src={vietnamGe454524B0_19202} />
            <div className="ellipse-20-19 border-1px-orange"></div>
            <Link to="/completedpreorderwritereview210">
              <img className="icon-close-45" src={iconClose2} />
            </Link>
          </div>
          <div className="overlap-group4-85 border-1px-silver">
            <img className="icon-camera-35" src={iconCamera} />
            <div className="photo-15-5 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo15}</div>
          </div>
        </div>
        <img className="line-3-39" src={line3} />
        <div className="group-container-63">
          <Link to="/main">
            <div className="group-46-22">
              <div className="overlap-group1-220">
                <div className="submit-review-23 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-378">
            <div className="cancel-23 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview221;
