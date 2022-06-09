import React from "react";
import { Link } from "react-router-dom";
import Group237 from "../Group237";
import "./CompletedPreorderHome2.css";

function CompletedPreorderHome2(props) {
  const { myBook, line2, iconClose, writeReview, cancelOrder, group237Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completedpreorderhome screen">
        <div className="flex-row-93">
          <div className="flex-col-89">
            <div className="my-book-42 applesdgothicneob00-regular-normal-black-30px">{myBook}</div>
            <img className="line-2-18" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-23" src={iconClose} />
          </Link>
        </div>
        <Group237
          spanText1={group237Props.spanText1}
          spanText4={group237Props.spanText4}
          className={group237Props.className}
        />
        <div className="group-container-44">
          <Link to="/completedpreorderwritereview13">
            <div className="group-32-2">
              <div className="overlap-group-352">
                <div className="write-review-6 applesdgothicneob00-regular-normal-flamingo-15px">{writeReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completedpreordercancelmodal3">
            <div className="group-29-2">
              <div className="overlap-group-352">
                <div className="cancel-order-16 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderHome2;
