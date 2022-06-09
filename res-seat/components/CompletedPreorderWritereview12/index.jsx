import React from "react";
import { Link } from "react-router-dom";
import Group5822 from "../Group5822";
import Group61 from "../Group61";
import "./CompletedPreorderWritereview12.css";

function CompletedPreorderWritereview12(props) {
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
    pleaseCompleteToWriteReview,
    submitReview,
    cancel,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereview1 screen">
        <div className="flex-row-94">
          <div className="review-21 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-24" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-48">
          <img className="line-2-19" src={line2} />
          <div className="overlap-group2-129">
            <img className="food-1-11" src={food1} />
            <div className="how-was-the-food-11 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="uncles-26 inter-semi-bold-black-25px">{uncles}</div>
          </div>
          <div className="group-175-1">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-154" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-155" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-156" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-153" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-153" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group5822 />
        <Group61 />
        <img className="line-3-27" src={line3} />
        <p className="please-complete-to-write-review-1 applesdgothicneob00-regular-normal-flamingo-15px">
          {pleaseCompleteToWriteReview}
        </p>
        <div className="overlap-group-container-36">
          <div className="overlap-group1-200">
            <div className="submit-review-11 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
          </div>
          <div className="overlap-group-353">
            <div className="cancel-11 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview12;
