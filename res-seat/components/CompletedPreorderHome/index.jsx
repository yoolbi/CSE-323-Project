import React from "react";
import { Link } from "react-router-dom";
import Group237 from "../Group237";
import "./CompletedPreorderHome.css";

function CompletedPreorderHome(props) {
  const { myBook, line2, iconClose, writeReview, cancelOrder, group237Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completed-preorder-home-7 screen">
        <div className="flex-row-85">
          <div className="flex-col-81">
            <div className="my-book-40 applesdgothicneob00-regular-normal-black-30px">{myBook}</div>
            <img className="line-2-16" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-21" src={iconClose} />
          </Link>
        </div>
        <Group237
          spanText1={group237Props.spanText1}
          spanText4={group237Props.spanText4}
          className={group237Props.className}
        />
        <div className="group-container-43">
          <Link to="/completedpreorderwritereview12">
            <div className="group-32-1">
              <div className="overlap-group-349">
                <div className="write-review-4 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completedpreordercancelmodal2">
            <div className="group-29-1">
              <div className="overlap-group-349">
                <div className="cancel-order-12 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderHome;
