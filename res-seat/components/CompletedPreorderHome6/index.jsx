import React from "react";
import { Link } from "react-router-dom";
import Group239 from "../Group239";
import "./CompletedPreorderHome6.css";

function CompletedPreorderHome6(props) {
  const { myBook, line2, iconClose, writeReview, cancelOrder, group239Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderhome5 screen">
        <div className="flex-row-124">
          <div className="flex-col-108">
            <div className="my-book-49 applesdgothicneob00-regular-normal-black-30px">{myBook}</div>
            <img className="line-2-37" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-42" src={iconClose} />
          </Link>
        </div>
        <Group239
          freeIconCelebration15177461={group239Props.freeIconCelebration15177461}
          spanText1={group239Props.spanText1}
          line3={group239Props.line3}
          className={group239Props.className}
        />
        <div className="group-container-60">
          <Link to="/completedpreorderwritereview13">
            <div className="group-32-6">
              <div className="overlap-group-375">
                <div className="write-review-13 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completedpreordercancelmodal">
            <div className="group-29-6">
              <div className="overlap-group-375">
                <div className="cancel-order-29 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderHome6;
