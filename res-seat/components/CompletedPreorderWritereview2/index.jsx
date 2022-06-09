import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import "./CompletedPreorderWritereview2.css";

function CompletedPreorderWritereview2(props) {
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
      <div className="completed-preorder-writereview2-29 screen">
        <div className="flex-row-32">
          <div className="review-10 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-3" src={iconClose1} />
          </Link>
        </div>
        <div className="overlap-group5-17">
          <img className="line-2-3" src={line2} />
          <div className="overlap-group2-69">
            <img className="food-1-1" src={food1} />
            <div className="how-was-the-food-1 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-15 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-73">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-97" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-98" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-99" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-96" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-96" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group58 />
        <div className="overlap-group-container-17">
          <div className="overlap-group6-14">
            <img className="pork-belly-g3d0983c26_1920-1-3" src={porkBellyG3D0983C26_19201} />
            <div className="ellipse-20-13 border-1px-orange"></div>
            <Link to="/completedpreorderwritereview25">
              <img className="icon-close-4" src={iconClose2} />
            </Link>
          </div>
          <div className="overlap-group4-37 border-1px-silver">
            <img className="icon-camera-20" src={iconCamera} />
            <div className="photo-15 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo15}</div>
          </div>
        </div>
        <img className="line-3-5" src={line3} />
        <div className="group-container-14">
          <Link to="/main">
            <div className="group-46-1">
              <div className="overlap-group1-84">
                <div className="submit-review-1 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-110">
            <div className="cancel-1 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview2;
