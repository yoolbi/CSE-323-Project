import React from "react";
import { Link } from "react-router-dom";
import Group61 from "../Group61";
import Frame3 from "../Frame3";
import "./CompletedPreorderWritereview236.css";

function CompletedPreorderWritereview236(props) {
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
      <div className="completedpreorderwritereview234 screen">
        <div className="flex-row-268">
          <div className="review-52 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-130" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group6-47">
          <img className="line-2-82" src={line2} />
          <div className="overlap-group2-199">
            <img className="food-1-40" src={food1} />
            <div className="how-was-the-food-40 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-67 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-68-2">
            <Link to="/completedpreorderwritereview231">
              <img className="icon-star-348" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview232">
              <img className="icon-star-349" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview233">
              <img className="icon-star-350" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview234">
              <img className="icon-star-347" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview235">
              <img className="icon-star-347" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderwritereview238">
          <div className="group-58-45">
            <div className="overlap-group3-154" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <p className="please-leave-an-hone-19 applesdgothicneob00-regular-normal-stack-16px">
                {pleaseLeaveAnHone}
              </p>
            </div>
          </div>
        </Link>
        <Group61 className={group61Props.className} />
        <img className="line-3-62" src={line3} />
        <Frame3 component1Props={frame3Props.component1Props} />
        <div className="group-container-92">
          <Link to="/restaurant-details-review">
            <div className="group-46-37">
              <div className="overlap-group1-315">
                <div className="submit-review-40 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completed-preorder-writereview-home-11">
            <div className="group-45-9">
              <div className="overlap-group-599">
                <div className="cancel-40 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview236;
