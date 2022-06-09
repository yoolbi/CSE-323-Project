import React from "react";
import { Link } from "react-router-dom";
import Group61 from "../Group61";
import "./CompletedPreorderWritereview226.css";

function CompletedPreorderWritereview226(props) {
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
      <div className="completedpreorderwritereview225 screen">
        <div className="flex-row-131">
          <div className="review-40 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-53" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-65">
          <img className="line-2-44" src={line2} />
          <div className="overlap-group2-151">
            <img className="food-1-28" src={food1} />
            <div className="how-was-the-food-28 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-38 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-68-1">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-224" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-225" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-226" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-223" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-223" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderwritereview211">
          <div className="group-58-38">
            <div className="overlap-group3-121" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <p className="please-leave-an-hone-12 applesdgothicneob00-regular-normal-stack-16px">
                {pleaseLeaveAnHone}
              </p>
            </div>
          </div>
        </Link>
        <Group61 className={group61Props.className} />
        <img className="line-3-44" src={line3} />
        <div className="group-container-68">
          <Link to="/main">
            <div className="group-46-27">
              <div className="overlap-group1-225">
                <div className="submit-review-28 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-383">
            <div className="cancel-28 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview226;
