import React from "react";
import { Link } from "react-router-dom";
import Group61 from "../Group61";
import "./CompletedPreorderWritereview220.css";

function CompletedPreorderWritereview220(props) {
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
    overlapGroup2,
    pleaseLeaveAnHone,
    line3,
    submitReview,
    cancel,
    group61Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereview219 screen">
        <div className="flex-row-118">
          <div className="review-33 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-39" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group4-82">
          <img className="line-2-34" src={line2} />
          <img className="food-1-22" src={food1} />
          <div className="how-was-the-food-22 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
          <div className="hanam-bbq-58 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          <div className="group-45-1">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-199" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-200" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-201" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-198" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-198" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderwritereview29">
          <div className="group-58-36">
            <div className="overlap-group2-143" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <p className="please-leave-an-hone-10 applesdgothicneob00-regular-normal-stack-16px">
                {pleaseLeaveAnHone}
              </p>
            </div>
          </div>
        </Link>
        <Group61 className={group61Props.className} />
        <img className="line-3-38" src={line3} />
        <div className="group-container-58">
          <Link to="/main">
            <div className="group-46-21">
              <div className="overlap-group1-216">
                <div className="submit-review-22 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-371">
            <div className="cancel-22 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview220;
