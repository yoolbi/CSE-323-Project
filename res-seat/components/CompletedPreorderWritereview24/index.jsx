import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview24.css";

function CompletedPreorderWritereview24(props) {
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
      <div className="completedpreorderwritereview23 screen">
        <div className="flex-row-35">
          <div className="review-13 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-9" src={iconClose1} />
          </Link>
        </div>
        <div className="overlap-group6-17">
          <img className="line-2-6" src={line2} />
          <div className="overlap-group2-72">
            <img className="food-1-4" src={food1} />
            <div className="how-was-the-food-4 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-18 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-64-4">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-109" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-110" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-111" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-108" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-108" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <div className="overlap-group-container-20">
          <div className="overlap-group5-20">
            <img className="pork-belly-g3d0983c26_1920-1-6" src={porkBellyG3D0983C26_19201} />
            <div className="ellipse-20-16 border-1px-orange"></div>
            <Link to="/completedpreorderwritereview28">
              <img className="icon-close-10" src={iconClose2} />
            </Link>
          </div>
          <div className="overlap-group4-40 border-1px-silver">
            <img className="icon-camera-23" src={iconCamera} />
            <div className="photo-15-3 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo15}</div>
          </div>
        </div>
        <img className="line-3-8" src={line3} />
        <div className="group-container-17">
          <Link to="/main">
            <div className="group-46-4">
              <div className="overlap-group1-87">
                <div className="submit-review-4 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-113">
            <div className="cancel-4 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview24;
