import React from "react";
import { Link } from "react-router-dom";
import Group61 from "../Group61";
import Frame3 from "../Frame3";
import "./CompletedPreorderWritereview233.css";

function CompletedPreorderWritereview233(props) {
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
    overlapGroup2,
    pleaseLeaveAnHone,
    line3,
    submitReview,
    cancel,
    group61Props,
    frame3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereview231 screen">
        <div className="flex-row-262">
          <div className="review-49 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="icon-close-127" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group5-95">
          <img className="line-2-78" src={line2} />
          <img className="food-1-37" src={food1} />
          <div className="how-was-the-food-37 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
          <div className="hanam-bbq-64 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          <div className="group-45-5">
            <Link to="/completedpreorderwritereview231">
              <img className="icon-star-336" src={iconStar1} />
            </Link>
            <Link to="/completedpreorderwritereview232">
              <img className="icon-star-337" src={iconStar2} />
            </Link>
            <Link to="/completedpreorderwritereview233">
              <img className="icon-star-338" src={iconStar3} />
            </Link>
            <Link to="/completedpreorderwritereview234">
              <img className="icon-star-335" src={iconStar4} />
            </Link>
            <Link to="/completedpreorderwritereview235">
              <img className="icon-star-335" src={iconStar5} />
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderwritereview230">
          <div className="group-58-42">
            <div className="overlap-group2-195" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <p className="please-leave-an-hone-16 applesdgothicneob00-regular-normal-stack-16px">
                {pleaseLeaveAnHone}
              </p>
            </div>
          </div>
        </Link>
        <Group61 className={group61Props.className} />
        <img className="line-3-59" src={line3} />
        <Frame3 component1Props={frame3Props.component1Props} />
        <div className="group-container-89">
          <Link to="/restaurant-details-review">
            <div className="group-46-34">
              <div className="overlap-group1-312">
                <div className="submit-review-37 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completed-preorder-writereview-home-11">
            <div className="group-45-6">
              <div className="overlap-group-595">
                <div className="cancel-37 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview233;
