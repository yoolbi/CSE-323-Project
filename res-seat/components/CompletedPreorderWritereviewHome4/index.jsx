import React from "react";
import { Link } from "react-router-dom";
import Frame2 from "../Frame2";
import "./CompletedPreorderWritereviewHome4.css";

function CompletedPreorderWritereviewHome4(props) {
  const {
    myOrder,
    line2,
    iconClose,
    freeIconCelebration15177461,
    successfullyCompleted,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    line3,
    writeReview,
    cancelOrder,
    frame2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderwritereviewhome3 screen">
        <div className="flex-row-254">
          <div className="flex-col-278">
            <div className="my-order-5 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-74" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-86" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group4-113">
          <img className="free-icon-celebration-1517746-1-21" src={freeIconCelebration15177461} />
          <div className="successfully-completed-5 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group3-148">
          <div className="hanam-bbq-1216pm-co-12 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneob00-regular-normal-flamingo-23px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-57" src={line3} />
        <Frame2 component1Props={frame2Props.component1Props} />
        <div className="group-container-87">
          <Link to="/completed-preorder-writereview1-2">
            <div className="group-32-12">
              <div className="overlap-group1-310">
                <div className="write-review-21 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-591">
            <div className="cancel-order-39 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancelOrder}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereviewHome4;
