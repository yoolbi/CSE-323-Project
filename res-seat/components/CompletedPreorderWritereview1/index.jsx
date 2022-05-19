import React from "react";
import { Link } from "react-router-dom";
import Group582 from "../Group582";
import Group61 from "../Group61";
import Group23 from "../Group23";
import "./CompletedPreorderWritereview1.css";

function CompletedPreorderWritereview1(props) {
  const {
    review,
    close,
    line2,
    food1,
    howWasTheFood,
    star2,
    star3,
    star4,
    star5,
    star6,
    hanamBbq,
    line3,
    image2,
    loadedBakedPotatoSoupRecipe32,
    loadedBakedPotatoSoupRecipe33,
    submitReview,
    cancel,
    group23Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completed-preorder-writereview1 screen">
        <div className="flex-row-82">
          <div className="review-9 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="close-6" src={close} />
          </Link>
        </div>
        <div className="overlap-group8-18">
          <img className="line-2-13" src={line2} />
          <div className="overlap-group2-24">
            <img className="food-1-3" src={food1} />
            <div className="how-was-the-food-3 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <Link to="/completedpreorderwritereview22">
              <div className="group-44-6">
                <img className="star-2-7" src={star2} />
                <img className="star-3-7" src={star3} />
                <img className="star-4-7" src={star4} />
                <img className="star-12" src={star5} />
                <img className="star-12" src={star6} />
              </div>
            </Link>
            <div className="hanam-bbq-19 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
        </div>
        <Group582 />
        <Group61 />
        <img className="line-3-6" src={line3} />
        <div className="group-60">
          <div className="overlap-group6-24">
            <Group23
              component11Props={group23Props.component11Props}
              component12Props={group23Props.component12Props}
              component13Props={group23Props.component13Props}
            />
            <img className="image-2-14" src={image2} />
            <img className="loaded-baked-potato-soup-recipe-3-2-3" src={loadedBakedPotatoSoupRecipe32} />
            <img className="loaded-baked-potato-soup-recipe-3-3-3" src={loadedBakedPotatoSoupRecipe33} />
          </div>
        </div>
        <div className="group-container-9">
          <div className="overlap-group1-45">
            <div className="submit-review-3 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
          </div>
          <Link to="/completed-preorder-writereview-home">
            <div className="group-33-1">
              <div className="overlap-group-97">
                <div className="cancel-3 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview1;
