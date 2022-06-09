import React from "react";
import { Link } from "react-router-dom";
import Group5822 from "../Group5822";
import Group61 from "../Group61";
import "./CompletedPreorderWritereview1.css";

function CompletedPreorderWritereview1(props) {
  const {
    review,
    iconClose,
    line2,
    food1,
    howWasTheFood,
    hanamBbq,
    iconStar1,
    iconStar2,
    iconStar3,
    iconStar4,
    iconStar5,
    line3,
    pleaseCompleteToWriteReview,
    submitReview,
    cancel,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completed-preorder-writereview1-3 screen">
        <div className="flex-row-15">
          <div className="review applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-2" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-3">
          <img className="line-2-2" src={line2} />
          <div className="overlap-group2-41">
            <img className="food-1" src={food1} />
            <div className="how-was-the-food applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-2 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-175">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-16" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-17" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-18" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-15" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-15" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group5822 />
        <Group61 />
        <img className="line-3-4" src={line3} />
        <p className="please-complete-to-write-review applesdgothicneob00-regular-normal-flamingo-15px">
          {pleaseCompleteToWriteReview}
        </p>
        <div className="overlap-group-container-8">
          <div className="overlap-group1-45">
            <div className="submit-review applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
          </div>
          <div className="overlap-group-65">
            <div className="cancel applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview1;
