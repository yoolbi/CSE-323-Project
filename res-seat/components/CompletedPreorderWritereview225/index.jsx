import React from "react";
import { Link } from "react-router-dom";
import Group61 from "../Group61";
import "./CompletedPreorderWritereview225.css";

function CompletedPreorderWritereview225(props) {
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
      <div className="completedpreorderwritereview224 screen">
        <div className="flex-row-130">
          <div className="review-39 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-52" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-64">
          <img className="line-2-43" src={line2} />
          <div className="overlap-group2-150">
            <img className="food-1-27" src={food1} />
            <div className="how-was-the-food-27 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-37 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-71-1">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-220" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-221" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-222" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-219" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-219" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderwritereview210">
          <div className="group-58-37">
            <div className="overlap-group3-120" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <p className="please-leave-an-hone-11 applesdgothicneob00-regular-normal-stack-16px">
                {pleaseLeaveAnHone}
              </p>
            </div>
          </div>
        </Link>
        <Group61 className={group61Props.className} />
        <img className="line-3-43" src={line3} />
        <div className="group-container-67">
          <Link to="/main">
            <div className="group-46-26">
              <div className="overlap-group1-224">
                <div className="submit-review-27 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-382">
            <div className="cancel-27 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview225;
