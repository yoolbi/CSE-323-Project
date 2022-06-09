import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview224.css";

function CompletedPreorderWritereview224(props) {
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
      <div className="completedpreorderwritereview223 screen">
        <div className="flex-row-129">
          <div className="review-38 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-50" src={iconClose1} />
          </Link>
        </div>
        <div className="overlap-group6-36">
          <img className="line-2-42" src={line2} />
          <div className="overlap-group2-149">
            <img className="food-1-26" src={food1} />
            <div className="how-was-the-food-26 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-36 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-64-15">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-216" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-217" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-218" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-215" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-215" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <div className="overlap-group-container-40">
          <div className="overlap-group5-63">
            <img className="vietnam-ge454524b0_1920-2-3" src={vietnamGe454524B0_19202} />
            <div className="ellipse-20-22 border-1px-orange"></div>
            <Link to="/completedpreorderwritereview213">
              <img className="icon-close-51" src={iconClose2} />
            </Link>
          </div>
          <div className="overlap-group4-88 border-1px-silver">
            <img className="icon-camera-38" src={iconCamera} />
            <div className="photo-15-8 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo15}</div>
          </div>
        </div>
        <img className="line-3-42" src={line3} />
        <div className="group-container-66">
          <Link to="/main">
            <div className="group-46-25">
              <div className="overlap-group1-223">
                <div className="submit-review-26 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-381">
            <div className="cancel-26 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview224;
