import React from "react";
import { Link } from "react-router-dom";
import Group61 from "../Group61";
import "./CompletedPreorderWritereview227.css";

function CompletedPreorderWritereview227(props) {
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
      <div className="completedpreorderwritereview226 screen">
        <div className="flex-row-132">
          <div className="review-41 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-54" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-66">
          <img className="line-2-45" src={line2} />
          <div className="overlap-group2-152">
            <img className="food-1-29" src={food1} />
            <div className="how-was-the-food-29 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-39 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-67-1">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-228" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-229" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-230" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-227" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-227" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderwritereview212">
          <div className="group-58-39">
            <div className="overlap-group3-122" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <p className="please-leave-an-hone-13 applesdgothicneob00-regular-normal-stack-16px">
                {pleaseLeaveAnHone}
              </p>
            </div>
          </div>
        </Link>
        <Group61 className={group61Props.className} />
        <img className="line-3-45" src={line3} />
        <div className="group-container-69">
          <Link to="/main">
            <div className="group-46-28">
              <div className="overlap-group1-226">
                <div className="submit-review-29 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-384">
            <div className="cancel-29 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview227;
