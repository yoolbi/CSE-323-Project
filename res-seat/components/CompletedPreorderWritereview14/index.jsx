import React from "react";
import { Link } from "react-router-dom";
import Group5822 from "../Group5822";
import Group61 from "../Group61";
import "./CompletedPreorderWritereview14.css";

function CompletedPreorderWritereview14(props) {
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
    line3,
    submitReview,
    cancel,
    group5822Props,
    group61Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereview13 screen">
        <div className="flex-row-137">
          <div className="review-45 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-60" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-69">
          <img className="line-2-50" src={line2} />
          <div className="overlap-group2-156">
            <img className="food-1-33" src={food1} />
            <div className="how-was-the-food-33 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-43 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-175-3">
            <Link to="/completedpreorderwritereview228">
              <img className="icon-star-244" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview227">
              <img className="icon-star-245" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview226">
              <img className="icon-star-246" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview225">
              <img className="icon-star-243" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview224">
              <img className="icon-star-243" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group5822 className={group5822Props.className} />
        <Group61 className={group61Props.className} />
        <img className="line-3-49" src={line3} />
        <div className="overlap-group-container-42">
          <div className="overlap-group1-230">
            <Link to="/completedpreorderwritereview1">
              <div className="submit-review-33 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
            </Link>
          </div>
          <div className="overlap-group-389">
            <div className="cancel-33 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview14;
