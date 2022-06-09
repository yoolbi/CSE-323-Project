import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview25.css";

function CompletedPreorderWritereview25(props) {
  const {
    review,
    iconClose1,
    line2,
    food1,
    howWasTheFood,
    hanamBbq,
    iconStar1,
    iconStar2,
    iconStar3,
    iconStar4,
    iconStar5,
    porkBellyG3D0983C26_19201,
    iconClose2,
    iconCamera,
    photo15,
    line3,
    submitReview,
    cancel,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereview24 screen">
        <div className="flex-row-36">
          <div className="review-14 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-11" src={iconClose1} />
          </Link>
        </div>
        <div className="overlap-group6-18">
          <img className="line-2-7" src={line2} />
          <div className="overlap-group2-73">
            <img className="food-1-5" src={food1} />
            <div className="how-was-the-food-5 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-19 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-63-4">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-113" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-114" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-115" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-112" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-112" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <div className="overlap-group-container-21">
          <div className="overlap-group5-21">
            <img className="pork-belly-g3d0983c26_1920-1-7" src={porkBellyG3D0983C26_19201} />
            <div className="ellipse-20-17 border-1px-orange"></div>
            <Link to="/completedpreorderwritereview29">
              <img className="icon-close-12" src={iconClose2} />
            </Link>
          </div>
          <div className="overlap-group4-41 border-1px-silver">
            <img className="icon-camera-24" src={iconCamera} />
            <div className="photo-15-4 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo15}</div>
          </div>
        </div>
        <img className="line-3-9" src={line3} />
        <div className="group-container-18">
          <Link to="/main">
            <div className="group-46-5">
              <div className="overlap-group1-88">
                <div className="submit-review-5 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-114">
            <div className="cancel-5 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview25;
