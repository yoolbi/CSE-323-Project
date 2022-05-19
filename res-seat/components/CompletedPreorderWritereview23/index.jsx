import React from "react";
import { Link } from "react-router-dom";
import Group61 from "../Group61";
import Frame2 from "../Frame2";
import "./CompletedPreorderWritereview23.css";

function CompletedPreorderWritereview23(props) {
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
    overlapGroup8,
    pleaseLeaveAnHone,
    line3,
    submitReview,
    cancel,
    frame2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereview22 screen">
        <div className="flex-row-53">
          <div className="review-6 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="close-5" src={close} />
          </Link>
        </div>
        <div className="overlap-group10-3">
          <img className="line-2-11" src={line2} />
          <div className="overlap-group7-17">
            <img className="food-1-2" src={food1} />
            <div className="how-was-the-food-2 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <Link to="/completedpreorderwritereview22">
              <div className="group-44-5">
                <img className="star-2-6" src={star2} />
                <img className="star-3-6" src={star3} />
                <img className="star-4-6" src={star4} />
                <img className="star-7" src={star5} />
                <img className="star-7" src={star6} />
              </div>
            </Link>
            <div className="hanam-bbq-12 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
        </div>
        <Link to="/completedpreorderwritereview2">
          <div className="group-58-2">
            <div className="overlap-group8-12" style={{ backgroundImage: `url(${overlapGroup8})` }}>
              <p className="please-leave-an-hone applesdgothicneob00-regular-normal-stack-16px">{pleaseLeaveAnHone}</p>
            </div>
          </div>
        </Link>
        <Group61 />
        <img className="line-3-5" src={line3} />
        <Frame2 className={frame2Props.className} group23Props={frame2Props.group23Props} />
        <div className="group-container-5">
          <Link to="/restaurant-details-review">
            <div className="group-46-2">
              <div className="overlap-group1-31">
                <div className="submit-review-2 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completed-preorder-writereview-home">
            <div className="group-45-2">
              <div className="overlap-group-86">
                <div className="cancel-2 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview23;
