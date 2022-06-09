import React from "react";
import { Link } from "react-router-dom";
import Group23 from "../Group23";
import "./CompletedPreorderHome14.css";

function CompletedPreorderHome14(props) {
  const {
    myOrder,
    line2,
    iconClose,
    freeIconCelebration15177461,
    successfullyCompleted,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    line3,
    image2,
    loadedBakedPotatoSoupRecipe32,
    writeReview,
    cancelOrder,
    group23Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completed-preorder-home screen">
        <div className="flex-row-552">
          <div className="flex-col-467">
            <div className="my-order-23 applesdgothicneob00-regular-normal-black-30px">{myOrder}</div>
            <img className="line-2-157" src={line2} />
          </div>
          <Link to="/main">
            <img className="icon-close-163" src={iconClose} />
          </Link>
        </div>
        <div className="overlap-group9-55">
          <img className="free-icon-celebration-1517746-1-38" src={freeIconCelebration15177461} />
          <div className="successfully-completed-22 applesdgothicneob00-regular-normal-black-40px">
            {successfullyCompleted}
          </div>
        </div>
        <div className="overlap-group10-39">
          <div className="hanam-bbq-1216pm-co-25 applesdgothicneob00-regular-normal-white-23px">
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText1}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText2}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText3}</span>
            <span className="applesdgothicneoeb00-regular-normal-flamingo-25px">{spanText4}</span>
            <span className="applesdgothicneob00-regular-normal-black-23px">{spanText5}</span>
          </div>
        </div>
        <img className="line-3-91" src={line3} />
        <div className="frame-1-8">
          <div className="overlap-group6-94">
            <Group23
              component11Props={group23Props.component11Props}
              component12Props={group23Props.component12Props}
              component13Props={group23Props.component13Props}
            />
            <img className="image-2-42" src={image2} />
            <img className="loaded-baked-potato-soup-recipe-3-2-7" src={loadedBakedPotatoSoupRecipe32} />
          </div>
        </div>
        <div className="group-container-241">
          <div className="overlap-group8-46">
            <div className="write-review-38 applesdgothicneob00-regular-normal-heavy-metal-15px">{writeReview}</div>
          </div>
          <Link to="/completed-preorder-cancelmodal">
            <div className="group-29-14">
              <div className="overlap-group7-64">
                <div className="cancel-order-64 applesdgothicneob00-regular-normal-flamingo-15px">{cancelOrder}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderHome14;
