import React from "react";
import { Link } from "react-router-dom";
import Frame2 from "../Frame2";
import "./CompletedPreorderWritereviewHome.css";

function CompletedPreorderWritereviewHome(props) {
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
      <div className="completed-preorder-writereview-home-11 screen">
        <div className="flex-row-138">
          <div className="flex-col-111">
            <div className="my-order applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-51" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-61" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group3-124">
          <img className="free-icon-celebration-1517746-1-16" src={freeIconCelebration15177461} />
          <div className="successfully-completed applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group4-91">
          <div className="hanam-bbq-1216pm-co-8 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneob00-regular-normal-flamingo-23px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-50" src={line3} />
        <Frame2 component1Props={frame2Props.component1Props} />
        <div className="group-container-74">
          <Link to="/completed-preorder-writereview1-2">
            <div className="group-32-9">
              <div className="overlap-group1-231">
                <div className="write-review-16 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-390">
            <div className="cancel-order-32 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancelOrder}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereviewHome;
