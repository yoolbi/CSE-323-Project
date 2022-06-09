import React from "react";
import { Link } from "react-router-dom";
import Group5822 from "../Group5822";
import Group61 from "../Group61";
import "./CompletedPreorderWritereview13.css";

function CompletedPreorderWritereview13(props) {
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
    line3,
    submitReview,
    cancel,
    group5822Props,
    group61Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereview12 screen">
        <div className="flex-row-103">
          <div className="review-22 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-27" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-49">
          <img className="line-2-22" src={line2} />
          <div className="overlap-group2-131">
            <img className="food-1-12" src={food1} />
            <div className="how-was-the-food-12 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="hanam-bbq-52 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
          <div className="group-175-2">
            <Link to="/completedpreorderwritereview219">
              <img className="icon-star-158" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview218">
              <img className="icon-star-159" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview217">
              <img className="icon-star-160" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview216">
              <img className="icon-star-157" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview215">
              <img className="icon-star-157" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Group5822 className={group5822Props.className} />
        <Group61 className={group61Props.className} />
        <img className="line-3-28" src={line3} />
        <div className="group-container-46">
          <Link to="/completed-preorder-writereview1-3">
            <div className="group-34-1">
              <div className="overlap-group1-203">
                <div className="submit-review-12 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-357">
            <div className="cancel-12 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview13;
