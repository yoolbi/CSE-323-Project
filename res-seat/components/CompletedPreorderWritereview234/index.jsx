import React from "react";
import { Link } from "react-router-dom";
import Group61 from "../Group61";
import Frame3 from "../Frame3";
import "./CompletedPreorderWritereview234.css";

function CompletedPreorderWritereview234(props) {
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
      <div className="completedpreorderwritereview232 screen">
        <div className="flex-row-266">
          <div className="review-50 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-128" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group6-45">
          <img className="line-2-80" src={line2} />
          <div className="overlap-group2-197">
            <img className="food-1-38" src={food1} />
            <div className="how-was-the-food-38 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-65 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-62-16">
            <Link to="/completedpreorderwritereview231">
              <img className="icon-star-340" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview232">
              <img className="icon-star-341" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview233">
              <img className="icon-star-342" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview234">
              <img className="icon-star-339" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview235">
              <img className="icon-star-339" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderwritereview236">
          <div className="group-58-43">
            <div className="overlap-group3-152" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <p className="please-leave-an-hone-17 applesdgothicneob00-regular-normal-stack-16px">
                {pleaseLeaveAnHone}
              </p>
            </div>
          </div>
        </Link>
        <Group61 className={group61Props.className} />
        <img className="line-3-60" src={line3} />
        <Frame3 component1Props={frame3Props.component1Props} />
        <div className="group-container-90">
          <Link to="/restaurant-details-review">
            <div className="group-46-35">
              <div className="overlap-group1-313">
                <div className="submit-review-38 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completed-preorder-writereview-home-11">
            <div className="group-45-7">
              <div className="overlap-group-597">
                <div className="cancel-38 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview234;
