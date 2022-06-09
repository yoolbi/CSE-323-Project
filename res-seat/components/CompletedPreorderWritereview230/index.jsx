import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview230.css";

function CompletedPreorderWritereview230(props) {
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
    vietnamGe454524B0_19201,
    iconClose2,
    iconCamera,
    photo15,
    line3,
    submitReview,
    cancel,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereview229 screen">
        <div className="flex-row-135">
          <div className="review-44 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-57" src={iconClose1} />
          </Link>
        </div>
        <div className="overlap-group5-68">
          <img className="line-2-48" src={line2} />
          <div className="overlap-group2-155">
            <img className="food-1-32" src={food1} />
            <div className="how-was-the-food-32 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-42 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-63-19">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-240" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-241" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-242" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-239" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-239" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <div className="overlap-group-container-41">
          <div className="overlap-group6-37">
            <img className="vietnam-ge454524b0_1920-1" src={vietnamGe454524B0_19201} />
            <div className="ellipse-20-23 border-1px-orange"></div>
            <Link to="/completedpreorderwritereview214">
              <img className="icon-close-58" src={iconClose2} />
            </Link>
          </div>
          <div className="overlap-group4-90 border-1px-silver">
            <img className="icon-camera-39" src={iconCamera} />
            <div className="photo-15-9 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo15}</div>
          </div>
        </div>
        <img className="line-3-48" src={line3} />
        <div className="group-container-72">
          <Link to="/main">
            <div className="group-46-31">
              <div className="overlap-group1-229">
                <div className="submit-review-32 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-387">
            <div className="cancel-32 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview230;
