import React from "react";
import { Link } from "react-router-dom";
import Group5822 from "../Group5822";
import Group61 from "../Group61";
import Group23 from "../Group23";
import "./CompletedPreorderWritereview16.css";

function CompletedPreorderWritereview16(props) {
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
    group5822Props,
    group61Props,
    group23Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="completed-preorder-writereview1 screen">
        <div className="flex-row-595">
          <div className="review-89 applesdgothicneob00-regular-normal-black-30px">{review}</div>
          <Link to="/main" className="align-self-flex-end">
            <img className="close-4" src={close} />
          </Link>
        </div>
        <div className="overlap-group8-52">
          <img className="line-2-168" src={line2} />
          <div className="overlap-group2-508">
            <img className="food-1-52" src={food1} />
            <div className="how-was-the-food-52 applesdgothicneob00-regular-normal-black-36px">{howWasTheFood}</div>
            <div className="group-44-7">
              <img className="star-2-5" src={star2} />
              <img className="star-3-4" src={star3} />
              <img className="star-4-4" src={star4} />
              <img className="star-6" src={star5} />
              <img className="star-6" src={star6} />
            </div>
            <div className="hanam-bbq-160 applesdgothicneob00-regular-normal-black-23px">{hanamBbq}</div>
          </div>
        </div>
        <Group5822 className={group5822Props.className} />
        <Group61 className={group61Props.className} />
        <img className="line-3-95" src={line3} />
        <div className="group-60-1">
          <div className="overlap-group6-104">
            <Group23
              component11Props={group23Props.component11Props}
              component12Props={group23Props.component12Props}
              component13Props={group23Props.component13Props}
            />
            <img className="image-2-47" src={image2} />
            <img className="loaded-baked-potato-soup-recipe-3-2-10" src={loadedBakedPotatoSoupRecipe32} />
            <img className="loaded-baked-potato-soup-recipe-3-3-3" src={loadedBakedPotatoSoupRecipe33} />
          </div>
        </div>
        <div className="group-container-247">
          <div className="overlap-group1-657">
            <div className="submit-review-52 applesdgothicneob00-regular-normal-flamingo-15px">{submitReview}</div>
          </div>
          <Link to="/completed-preorder-writereview-home">
            <div className="group-33-2">
              <div className="overlap-group-1130">
                <div className="cancel-52 applesdgothicneob00-regular-normal-heavy-metal-15px">{cancel}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletedPreorderWritereview16;
