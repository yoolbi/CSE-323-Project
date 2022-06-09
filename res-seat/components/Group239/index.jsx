import React from "react";
import "./Group239.css";

function Group239(props) {
  const { freeIconCelebration15177461, spanText1, line3, className } = props;

  return (
    <div className={`group-239 ${className || ""}`}>
      <img className="free-icon-celebration-1517746-1" src={freeIconCelebration15177461} />
      <h1 className="seat-reservation-completed applesdgothicneob00-regular-normal-black-40px">
        Seat
        <br />
        Reservation
        <br />
        Completed!
      </h1>
      <div className="overlap-group2">
        <div className="hanam-bbq-1216pm-co applesdgothicneob00-regular-normal-white-23px">
          <span className="span-1 applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
          <span className="span-1 applesdgothicneoeb00-regular-normal-flamingo-25px">12:16pm</span>
          <span className="span-1 applesdgothicneob00-regular-normal-black-23px">
            {" "}
            completed reservation
            <br />
          </span>
          <span className="span-1 applesdgothicneoeb00-regular-normal-flamingo-25px">4 </span>
          <span className="span-1 applesdgothicneob00-regular-normal-black-23px">people are coming</span>
        </div>
      </div>
      <img className="line-3" src={line3} />
    </div>
  );
}

export default Group239;
