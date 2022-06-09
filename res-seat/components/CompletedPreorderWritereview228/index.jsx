import React from "react";
import { Link } from "react-router-dom";
import Group61 from "../Group61";
import "./CompletedPreorderWritereview228.css";

function CompletedPreorderWritereview228(props) {
  const {
    review,
    iconClose,
    line2,
    food1,
    howWasTheFood,
    uncles,
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
      <div className="completedpreorderwritereview227 screen">
        <div className="flex-row-133">
          <div className="review-42 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-55" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-67">
          <img className="line-2-46" src={line2} />
          <div className="overlap-group2-153">
            <img className="food-1-30" src={food1} />
            <div className="how-was-the-food-30 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-40 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-62-11">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-232" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-233" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-234" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-231" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-231" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderwritereview213">
          <div className="group-58-40">
            <div className="overlap-group3-123" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <p className="please-leave-an-hone-14 applesdgothicneob00-regular-normal-stack-16px">
                {pleaseLeaveAnHone}
              </p>
            </div>
          </div>
        </Link>
        <Group61 className={group61Props.className} />
        <img className="line-3-46" src={line3} />
        <div className="group-container-70">
          <Link to="/main">
            <div className="group-46-29">
              <div className="overlap-group1-227">
                <div className="submit-review-30 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-385">
            <div className="cancel-30 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview228;
