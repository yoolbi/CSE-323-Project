import React from "react";
import { Link } from "react-router-dom";
import Group61 from "../Group61";
import "./CompletedPreorderWritereview218.css";

function CompletedPreorderWritereview218(props) {
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereview217 screen">
        <div className="flex-row-116">
          <div className="review-31 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-37" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-57">
          <img className="line-2-32" src={line2} />
          <div className="overlap-group2-141">
            <img className="food-1-20" src={food1} />
            <div className="how-was-the-food-20 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-56 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-67">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-191" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-192" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-193" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-190" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-190" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderwritereview27">
          <div className="group-58-34">
            <div className="overlap-group3-116" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <p className="please-leave-an-hone-8 applesdgothicneob00-regular-normal-stack-16px">
                {pleaseLeaveAnHone}
              </p>
            </div>
          </div>
        </Link>
        <Group61 className={group61Props.className} />
        <img className="line-3-36" src={line3} />
        <div className="group-container-56">
          <Link to="/main">
            <div className="group-46-19">
              <div className="overlap-group1-214">
                <div className="submit-review-20 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-369">
            <div className="cancel-20 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview218;
