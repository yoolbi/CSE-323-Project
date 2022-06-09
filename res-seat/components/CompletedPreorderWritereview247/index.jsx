import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import Frame24 from "../Frame24";
import "./CompletedPreorderWritereview247.css";

function CompletedPreorderWritereview247(props) {
  const {
    review,
    close1,
    line2,
    food1,
    howWasTheFood,
    star2,
    star3,
    star4,
    star5,
    star6,
    hanamBbq,
    porkBellyG3D0983C26_19201,
    close2,
    photo15,
    line3,
    submitReview,
    cancel,
    frame24Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completed-preorder-writereview2-2 screen">
        <div className="flex-row-575">
          <div className="review-85 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="close-2" src={close1} />
          </Link>
        </div>
        <div className="overlap-group11-20">
          <img className="line-2-166" src={line2} />
          <div className="overlap-group7-71">
            <img className="food-1-51" src={food1} />
            <div className="how-was-the-food-51 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <Link to="/completed-preorder-writereview2-2">
              <div className="group-44-6">
                <img className="star-2-4" src={star2} />
                <img className="star-3-3" src={star3} />
                <img className="star-4-3" src={star4} />
                <img className="star-5" src={star5} />
                <img className="star-5" src={star6} />
              </div>
            </Link>
            <div className="hanam-bbq-153 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
        </div>
        <Group58 />
        <div className="overlap-group-container-73">
          <div className="overlap-group10-40">
            <img className="pork-belly-g3d0983c26_1920-1-13" src={porkBellyG3D0983C26_19201} />
            <div className="ellipse-20-48 border-1px-orange"></div>
            <img className="close-3" src={close2} />
          </div>
          <div className="overlap-group9-56 border-1px-silver">
            <img className="vector-779" src="/img/vector-38@2x.png" />
            <div className="photo-15-15 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo15}</div>
          </div>
        </div>
        <img className="line-3-94" src={line3} />
        <Frame24 className={frame24Props.className} group23Props={frame24Props.group23Props} />
        <div className="group-container-243">
          <Link to="/restaurant-details-review">
            <div className="group-46-48">
              <div className="overlap-group1-649">
                <div className="submit-review-51 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completed-preorder-writereview-home">
            <div className="group-45-20">
              <div className="overlap-group-1121">
                <div className="cancel-51 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview247;
