import React from "react";
import { Link } from "react-router-dom";
import Group237 from "../Group237";
import "./CompletedPreorderHome3.css";

function CompletedPreorderHome3(props) {
  const { myBook, line2, iconClose, writeReview, cancelOrder, group237Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderhome2 screen">
        <div className="flex-row-102">
          <div className="flex-col-97">
            <div className="my-book-44 applesdgothicneob00-regular-normal-black-30px">{myBook}</div>
            <img className="line-2-21" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-26" src={iconClose} />
          </Link>
        </div>
        <Group237
          spanText1={group237Props.spanText1}
          spanText4={group237Props.spanText4}
          className={group237Props.className}
        />
        <div className="group-container-45">
          <Link to="/completedpreorderwritereview12">
            <div className="group-32-3">
              <div className="overlap-group-356">
                <div className="write-review-8 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completedpreordercancelmodal4">
            <div className="group-29-3">
              <div className="overlap-group-356">
                <div className="cancel-order-20 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderHome3;
