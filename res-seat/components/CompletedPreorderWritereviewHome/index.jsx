import React from "react";
import { Link } from "react-router-dom";
import Frame2 from "../Frame2";
import "./CompletedPreorderWritereviewHome.css";

function CompletedPreorderWritereviewHome(props) {
  const {
    myOrder,
    line2,
    close,
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
      <div className="completed-preorder-writereview-home screen">
        <div className="flex-row-48">
          <div className="flex-col-44">
            <div className="my-order-7 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-8" src={line2} />
          </div>
          <Link to="/main">
            <img className="close-1" src={close} />
          </Link>
        </div>
        <div className="overlap-group7-12">
          <img className="free-icon-celebration-1517746-1-2" src={freeIconCelebration15177461} />
          <div className="successfully-completed-2 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group8-8">
          <div className="hanam-bbq-1216pm-co-1 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneob00-regular-normal-flamingo-23px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-2" src={line3} />
        <Frame2 group23Props={frame2Props.group23Props} />
        <div className="group-container-2">
          <Link to="/completed-preorder-writereview1">
            <div className="group-32">
              <div className="overlap-group1-22">
                <div className="write-review-2 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-72">
            <div className="cancel-order-4 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancelOrder}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereviewHome;
