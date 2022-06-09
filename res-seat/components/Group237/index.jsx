import React from "react";
import "./Group237.css";

function Group237(props) {
  const { spanText1, spanText4, className } = props;

  return (
    <div className={`group-236 ${className || ""}`}>
      <img className="free-icon-celebration-1517746-1-4" src="/img/free-icon-celebration-1517746-1-2@2x.png" />
      <div className="seat-reservation-completed-4 applesdgothicneob00-regular-normal-black-40px">
        Seat
        <br />
        Reservation
        <br />
        Completed!
      </div>
      <div className="overlap-group2-111">
        <div className="hanam-bbq-1216pm-co-2 applesdgothicneob00-regular-normal-white-23px">
          <span className="span-60 applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
          <span className="span-60 applesdgothicneoeb00-regular-normal-flamingo-25px">12:16pm</span>
          <span className="span-60 applesdgothicneob00-regular-normal-black-23px">
            {" "}
            completed reservation
            <br />
          </span>
          <span className="span-60 applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
          <span className="span-60 applesdgothicneob00-regular-normal-black-23px">people are coming</span>
        </div>
      </div>
      <img className="line-3-15" src="/img/line-3-1@2x.png" />
    </div>
  );
}

export default Group237;
