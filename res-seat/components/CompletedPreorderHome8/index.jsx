import React from "react";
import { Link } from "react-router-dom";
import Group237 from "../Group237";
import "./CompletedPreorderHome8.css";

function CompletedPreorderHome8(props) {
  const { myBook, line2, iconClose, writeReview, cancelOrder, group237Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderhome7 screen">
        <div className="flex-row-136">
          <div className="flex-col-110">
            <div className="my-book-51 applesdgothicneob00-regular-normal-black-30px">{myBook}</div>
            <img className="line-2-49" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-59" src={iconClose} />
          </Link>
        </div>
        <Group237
          spanText1={group237Props.spanText1}
          spanText4={group237Props.spanText4}
          className={group237Props.className}
        />
        <div className="group-container-73">
          <Link to="/completedpreorderwritereview13">
            <div className="group-32-8">
              <div className="overlap-group-388">
                <div className="write-review-15 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completedpreordercancelmodal7">
            <div className="group-29-8">
              <div className="overlap-group-388">
                <div className="cancel-order-31 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderHome8;
