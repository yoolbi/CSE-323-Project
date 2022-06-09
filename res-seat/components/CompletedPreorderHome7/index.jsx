import React from "react";
import { Link } from "react-router-dom";
import Group237 from "../Group237";
import "./CompletedPreorderHome7.css";

function CompletedPreorderHome7(props) {
  const { myBook, line2, iconClose, writeReview, cancelOrder, group237Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderhome6 screen">
        <div className="flex-row-125">
          <div className="flex-col-109">
            <div className="my-book-50 applesdgothicneob00-regular-normal-black-30px">{myBook}</div>
            <img className="line-2-38" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-43" src={iconClose} />
          </Link>
        </div>
        <Group237
          spanText1={group237Props.spanText1}
          spanText4={group237Props.spanText4}
          className={group237Props.className}
        />
        <div className="group-container-62">
          <Link to="/completedpreorderwritereview12">
            <div className="group-32-7">
              <div className="overlap-group-377">
                <div className="write-review-14 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completedpreordercancelmodal6">
            <div className="group-29-7">
              <div className="overlap-group-377">
                <div className="cancel-order-30 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderHome7;
