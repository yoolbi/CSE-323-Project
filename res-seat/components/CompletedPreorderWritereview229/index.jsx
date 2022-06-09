import React from "react";
import { Link } from "react-router-dom";
import Group61 from "../Group61";
import "./CompletedPreorderWritereview229.css";

function CompletedPreorderWritereview229(props) {
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
    overlapGroup2,
    pleaseLeaveAnHone,
    line3,
    submitReview,
    cancel,
    group61Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereview228 screen">
        <div className="flex-row-134">
          <div className="review-43 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-56" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group4-89">
          <img className="line-2-47" src={line2} />
          <img className="food-1-31" src={food1} />
          <div className="how-was-the-food-31 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
          <div className="uncles-41 inter-semi-bold-black-25px">{uncles}</div>
          <div className="group-45-2">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-236" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-237" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-238" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-235" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-235" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderwritereview214">
          <div className="group-58-41">
            <div className="overlap-group2-154" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <p className="please-leave-an-hone-15 applesdgothicneob00-regular-normal-stack-16px">
                {pleaseLeaveAnHone}
              </p>
            </div>
          </div>
        </Link>
        <Group61 className={group61Props.className} />
        <img className="line-3-47" src={line3} />
        <div className="group-container-71">
          <Link to="/main">
            <div className="group-46-30">
              <div className="overlap-group1-228">
                <div className="submit-review-31 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-386">
            <div className="cancel-31 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview229;
