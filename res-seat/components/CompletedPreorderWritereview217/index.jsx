import React from "react";
import { Link } from "react-router-dom";
import Group61 from "../Group61";
import "./CompletedPreorderWritereview217.css";

function CompletedPreorderWritereview217(props) {
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
      <div className="completedpreorderwritereview216 screen">
        <div className="flex-row-115">
          <div className="review-30 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-36" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-56">
          <img className="line-2-31" src={line2} />
          <div className="overlap-group2-140">
            <img className="food-1-19" src={food1} />
            <div className="how-was-the-food-19 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-55 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-68">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-187" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-188" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-189" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-186" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-186" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderwritereview26">
          <div className="group-58-33">
            <div className="overlap-group3-115" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <p className="please-leave-an-hone-7 applesdgothicneob00-regular-normal-stack-16px">
                {pleaseLeaveAnHone}
              </p>
            </div>
          </div>
        </Link>
        <Group61 className={group61Props.className} />
        <img className="line-3-35" src={line3} />
        <div className="group-container-55">
          <Link to="/main">
            <div className="group-46-18">
              <div className="overlap-group1-213">
                <div className="submit-review-19 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-368">
            <div className="cancel-19 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview217;
