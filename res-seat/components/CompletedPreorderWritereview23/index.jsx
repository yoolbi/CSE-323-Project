import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview23.css";

function CompletedPreorderWritereview23(props) {
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
      <div className="completedpreorderwritereview22 screen">
        <div className="flex-row-34">
          <div className="review-12 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-7" src={iconClose1} />
          </Link>
        </div>
        <div className="overlap-group5-19">
          <img className="line-2-5" src={line2} />
          <div className="overlap-group2-71">
            <img className="food-1-3" src={food1} />
            <div className="how-was-the-food-3 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-17 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-65-2">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-105" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-106" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-107" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-104" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-104" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <div className="overlap-group-container-19">
          <div className="overlap-group6-16">
            <img className="pork-belly-g3d0983c26_1920-1-5" src={porkBellyG3D0983C26_19201} />
            <div className="ellipse-20-15 border-1px-orange"></div>
            <Link to="/completedpreorderwritereview27">
              <img className="icon-close-8" src={iconClose2} />
            </Link>
          </div>
          <div className="overlap-group4-39 border-1px-silver">
            <img className="icon-camera-22" src={iconCamera} />
            <div className="photo-15-2 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo15}</div>
          </div>
        </div>
        <img className="line-3-7" src={line3} />
        <div className="group-container-16">
          <Link to="/main">
            <div className="group-46-3">
              <div className="overlap-group1-86">
                <div className="submit-review-3 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-112">
            <div className="cancel-3 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview23;
