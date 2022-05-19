import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import Frame2 from "../Frame2";
import "./CompletedPreorderWritereview22.css";

function CompletedPreorderWritereview22(props) {
  const {
    review,
    close,
    line2,
    food1,
    howWasTheFood,
    star2,
    star3,
    star4,
    star5,
    star6,
    hanamBbq,
    photo05,
    line3,
    submitReview,
    cancel,
    frame2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereview2 screen">
        <div className="flex-row-50">
          <div className="review-4 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="close-4" src={close} />
          </Link>
        </div>
        <div className="overlap-group10-2">
          <img className="line-2-10" src={line2} />
          <div className="overlap-group7-14">
            <img className="food-1-1" src={food1} />
            <div className="how-was-the-food-1 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <Link to="/completedpreorderwritereview2">
              <div className="group-44-4">
                <img className="star-2-5" src={star2} />
                <img className="star-3-5" src={star3} />
                <img className="star-4-5" src={star4} />
                <img className="star-6" src={star5} />
                <img className="star-6" src={star6} />
              </div>
            </Link>
            <div className="hanam-bbq-9 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
        </div>
        <Group58 />
        <Link to="/completed-preorder-writereview2-2" className="align-self-flex-start">
          <div className="group-61">
            <div className="overlap-group9-8 border-1px-silver">
              <img className="vector-37" src="/img/vector-38@2x.png" />
              <div className="photo-05 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo05}</div>
            </div>
          </div>
        </Link>
        <img className="line-3-4" src={line3} />
        <Frame2 className={frame2Props.className} group23Props={frame2Props.group23Props} />
        <div className="group-container-4">
          <Link to="/restaurant-details-review">
            <div className="group-46-1">
              <div className="overlap-group1-24">
                <div className="submit-review-1 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completed-preorder-writereview-home">
            <div className="group-45-1">
              <div className="overlap-group-74">
                <div className="cancel-1 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview22;
