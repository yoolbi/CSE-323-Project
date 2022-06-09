import React from "react";
import { Link } from "react-router-dom";
import Group61 from "../Group61";
import "./CompletedPreorderWritereview219.css";

function CompletedPreorderWritereview219(props) {
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
      <div className="completedpreorderwritereview218 screen">
        <div className="flex-row-117">
          <div className="review-32 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-38" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-58">
          <img className="line-2-33" src={line2} />
          <div className="overlap-group2-142">
            <img className="food-1-21" src={food1} />
            <div className="how-was-the-food-21 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-57 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-62-10">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-195" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-196" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-197" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-194" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-194" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderwritereview28">
          <div className="group-58-35">
            <div className="overlap-group3-117" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <p className="please-leave-an-hone-9 applesdgothicneob00-regular-normal-stack-16px">
                {pleaseLeaveAnHone}
              </p>
            </div>
          </div>
        </Link>
        <Group61 className={group61Props.className} />
        <img className="line-3-37" src={line3} />
        <div className="group-container-57">
          <Link to="/main">
            <div className="group-46-20">
              <div className="overlap-group1-215">
                <div className="submit-review-21 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-370">
            <div className="cancel-21 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview219;
