import React from "react";
import { Link } from "react-router-dom";
import Frame24 from "../Frame24";
import "./CompletedPreorderWritereviewHome13.css";

function CompletedPreorderWritereviewHome13(props) {
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
    frame24Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completed-preorder-writereview-home screen">
        <div className="flex-row-574">
          <div className="flex-col-475">
            <div className="my-order-25 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-165" src={line2} />
          </div>
          <Link to="/main">
            <img className="close-1" src={close} />
          </Link>
        </div>
        <div className="overlap-group7-70">
          <img className="free-icon-celebration-1517746-1-40" src={freeIconCelebration15177461} />
          <div className="successfully-completed-24 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group8-49">
          <div className="hanam-bbq-1216pm-co-26 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneob00-regular-normal-flamingo-23px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-93" src={line3} />
        <Frame24 group23Props={frame24Props.group23Props} />
        <div className="group-container-242">
          <Link to="/completed-preorder-writereview1">
            <div className="group-32-21">
              <div className="overlap-group1-648">
                <div className="write-review-40 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group-1120">
            <div className="cancel-order-68 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancelOrder}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereviewHome13;
