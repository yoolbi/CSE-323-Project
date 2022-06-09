import React from "react";
import { Link } from "react-router-dom";
import Group61 from "../Group61";
import "./CompletedPreorderWritereview216.css";

function CompletedPreorderWritereview216(props) {
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
      <div className="completedpreorderwritereview215 screen">
        <div className="flex-row-114">
          <div className="review-29 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-35" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-55">
          <img className="line-2-30" src={line2} />
          <div className="overlap-group2-139">
            <img className="food-1-18" src={food1} />
            <div className="how-was-the-food-18 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-54 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-71">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-183" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-184" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-185" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-182" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-182" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderwritereview25">
          <div className="group-58-32">
            <div className="overlap-group3-114" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <p className="please-leave-an-hone-6 applesdgothicneob00-regular-normal-stack-16px">
                {pleaseLeaveAnHone}
              </p>
            </div>
          </div>
        </Link>
        <Group61 className={group61Props.className} />
        <img className="line-3-34" src={line3} />
        <div className="group-container-54">
          <Link to="/main">
            <div className="group-46-17">
              <div className="overlap-group1-212">
                <div className="submit-review-18 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-367">
            <div className="cancel-18 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview216;
