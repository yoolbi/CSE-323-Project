import React from "react";
import { Link } from "react-router-dom";
import Group237 from "../Group237";
import "./CompletedPreorderHome5.css";

function CompletedPreorderHome5(props) {
  const { myBook, line2, iconClose, writeReview, cancelOrder, group237Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderhome4 screen">
        <div className="flex-row-119">
          <div className="flex-col-103">
            <div className="my-book-47 applesdgothicneob00-regular-normal-black-30px">{myBook}</div>
            <img className="line-2-35" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-40" src={iconClose} />
          </Link>
        </div>
        <Group237
          spanText1={group237Props.spanText1}
          spanText4={group237Props.spanText4}
          className={group237Props.className}
        />
        <div className="group-container-59">
          <Link to="/completedpreorderwritereview1">
            <div className="group-32-5">
              <div className="overlap-group-372">
                <div className="write-review-11 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completedpreordercancelmodal5">
            <div className="group-29-5">
              <div className="overlap-group-372">
                <div className="cancel-order-25 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderHome5;
