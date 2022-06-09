import React from "react";
import { Link } from "react-router-dom";
import Group61 from "../Group61";
import Frame3 from "../Frame3";
import "./CompletedPreorderWritereview237.css";

function CompletedPreorderWritereview237(props) {
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
    overlapGroup3,
    pleaseLeaveAnHone,
    line3,
    submitReview,
    cancel,
    group61Props,
    frame3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereview235 screen">
        <div className="flex-row-269">
          <div className="review-53 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-131" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group6-48">
          <img className="line-2-83" src={line2} />
          <div className="overlap-group2-200">
            <img className="food-1-41" src={food1} />
            <div className="how-was-the-food-41 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-68 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-71-2">
            <Link to="/completedpreorderwritereview231">
              <img className="icon-star-352" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview232">
              <img className="icon-star-353" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview233">
              <img className="icon-star-354" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview234">
              <img className="icon-star-351" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview235">
              <img className="icon-star-351" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderwritereview239">
          <div className="group-58-46">
            <div className="overlap-group3-155" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <p className="please-leave-an-hone-20 applesdgothicneob00-regular-normal-stack-16px">
                {pleaseLeaveAnHone}
              </p>
            </div>
          </div>
        </Link>
        <Group61 className={group61Props.className} />
        <img className="line-3-63" src={line3} />
        <Frame3 component1Props={frame3Props.component1Props} />
        <div className="group-container-93">
          <Link to="/restaurant-details-review">
            <div className="group-46-38">
              <div className="overlap-group1-316">
                <div className="submit-review-41 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completed-preorder-writereview-home-11">
            <div className="group-45-10">
              <div className="overlap-group-600">
                <div className="cancel-41 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview237;
