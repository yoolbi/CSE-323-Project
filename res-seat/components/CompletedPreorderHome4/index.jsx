import React from "react";
import { Link } from "react-router-dom";
import Group239 from "../Group239";
import "./CompletedPreorderHome4.css";

function CompletedPreorderHome4(props) {
  const { myBook, line2, iconClose, writeReview, cancelOrder, group239Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderhome3 screen">
        <div className="flex-row-108">
          <div className="flex-col-102">
            <div className="my-book-46 applesdgothicneob00-regular-normal-black-30px">{myBook}</div>
            <img className="line-2-24" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-29" src={iconClose} />
          </Link>
        </div>
        <Group239
          freeIconCelebration15177461={group239Props.freeIconCelebration15177461}
          spanText1={group239Props.spanText1}
          line3={group239Props.line3}
          className={group239Props.className}
        />
        <div className="group-container-47">
          <Link to="/completedpreorderwritereview12">
            <div className="group-32-4">
              <div className="overlap-group-360">
                <div className="write-review-10 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completed-preorder-cancelmodal-7">
            <div className="group-29-4">
              <div className="overlap-group-360">
                <div className="cancel-order-24 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderHome4;
