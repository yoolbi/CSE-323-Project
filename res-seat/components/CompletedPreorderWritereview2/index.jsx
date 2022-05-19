import React from "react";
import { Link } from "react-router-dom";
import Group58 from "../Group58";
import Frame2 from "../Frame2";
import "./CompletedPreorderWritereview2.css";

function CompletedPreorderWritereview2(props) {
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
    frame2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completed-preorder-writereview2-2 screen">
        <div className="flex-row-49">
          <div className="review-3 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="close-2" src={close1} />
          </Link>
        </div>
        <div className="overlap-group11">
          <img className="line-2-9" src={line2} />
          <div className="overlap-group7-13">
            <img className="food-1" src={food1} />
            <div className="how-was-the-food applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <Link to="/completed-preorder-writereview2-2">
              <div className="group-44-3">
                <img className="star-2-4" src={star2} />
                <img className="star-3-4" src={star3} />
                <img className="star-4-4" src={star4} />
                <img className="star-5" src={star5} />
                <img className="star-5" src={star6} />
              </div>
            </Link>
            <div className="hanam-bbq-8 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
        </div>
        <Group58 />
        <div className="overlap-group-container-5">
          <div className="overlap-group10-1">
            <img className="pork-belly-g3d0983c26_1920-1" src={porkBellyG3D0983C26_19201} />
            <div className="ellipse-20 border-1px-orange"></div>
            <Link to="/completedpreorderwritereview2">
              <img className="close-3" src={close2} />
            </Link>
          </div>
          <div className="overlap-group9-7 border-1px-silver">
            <img className="vector-36" src="/img/vector-38@2x.png" />
            <div className="photo-15 applesdgothicneob00-regular-normal-fuscous-gray-13px">{photo15}</div>
          </div>
        </div>
        <img className="line-3-3" src={line3} />
        <Frame2 className={frame2Props.className} group23Props={frame2Props.group23Props} />
        <div className="group-container-3">
          <Link to="/restaurant-details-review">
            <div className="group-46">
              <div className="overlap-group1-23">
                <div className="submit-review applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
              </div>
            </div>
          </Link>
          <Link to="/completed-preorder-writereview-home">
            <div className="group-45">
              <div className="overlap-group-73">
                <div className="cancel applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview2;
