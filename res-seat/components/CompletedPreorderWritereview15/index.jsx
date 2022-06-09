import React from "react";
import { Link } from "react-router-dom";
import Group5822 from "../Group5822";
import Group61 from "../Group61";
import Frame2 from "../Frame2";
import "./CompletedPreorderWritereview15.css";

function CompletedPreorderWritereview15(props) {
  const {
    review,
    iconClose,
    line2,
    food1,
    howWasTheFood,
    iconStar1,
    iconStar2,
    iconStar3,
    iconStar4,
    iconStar5,
    hanamBbq,
    line3,
    submitReview,
    cancel,
    group5822Props,
    group61Props,
    frame2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completed-preorder-writereview1-2 screen">
        <div className="flex-row-141">
          <div className="review-47 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-63" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group6-40">
          <img className="line-2-53" src={line2} />
          <div className="overlap-group2-170">
            <img className="food-1-35" src={food1} />
            <div className="how-was-the-food-35 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="group-44-3">
              <img className="icon-star-328" src={iconStar1} />
              <img className="icon-star-329" src={iconStar2} />
              <img className="icon-star-330" src={iconStar3} />
              <img className="icon-star-327" src={iconStar4} />
              <img className="icon-star-327" src={iconStar5} />
            </div>
            <div className="hanam-bbq-60 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
        </div>
        <Group5822 className={group5822Props.className} />
        <Group61 className={group61Props.className} />
        <img className="line-3-52" src={line3} />
        <Frame2 component1Props={frame2Props.component1Props} />
        <div className="group-container-77">
          <div className="overlap-group1-263">
            <div className="submit-review-35 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
          </div>
          <Link to="/completed-preorder-writereview-home-11">
            <div className="group-33-1">
              <div className="overlap-group-469">
                <div className="cancel-35 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview15;
