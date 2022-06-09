import React from "react";
import { Link } from "react-router-dom";
import Group10 from "../Group10";
import Group11 from "../Group11";
import Component132 from "../Component132";
import "./ShoppingCartPeople23.css";

function ShoppingCartPeople23(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    outline_Add_Black_24Dp1,
    addMoreMenu,
    total,
    x15200Won,
    line5,
    weAre,
    outline_Remove_Black_24Dp1,
    people,
    wellBeIn,
    mins,
    line6,
    arrowDropDown,
    select,
    completePreOrder,
    loadedBakedPotatoSoupRecipe34,
    group10Props,
    group11Props,
    component132Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople22 screen">
        <div className="group-container-129">
          <div className="group-40-7">
            <div className="flex-col-433">
              <Link to="/restaurant-details-menu1">
                <div className="group-52-61">
                  <img className="arrow-back-57" src={arrowBack} />
                  <div className="menu-80 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
                </div>
              </Link>
              <img className="line-1-123" src={line1} />
              <div className="shopping-cart-58 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
              <img className="line-2-144" src={line2} />
              <div className="group-12-44">
                <Link to="/restaurant-details-menu1">
                  <div className="group-11-106">
                    <img className="outline-142" src={outline_Add_Black_24Dp1} />
                  </div>
                </Link>
                <div className="add-more-menu-57 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
              </div>
              <div className="flex-row-428 applesdgothicneob00-regular-normal-black-28px">
                <div className="total-56">{total}</div>
                <div className="x15200-won-238">{x15200Won}</div>
              </div>
              <img className="line-5-79" src={line5} />
            </div>
            <div className="flex-row-429 applesdgothicneob00-regular-normal-black-25px">
              <div className="we-are-96">{weAre}</div>
              <Link to="/shopping-cartpeople32">
                <div className="group-13-82">
                  <div className="group-7-156">
                    <img className="outline-142" src={outline_Remove_Black_24Dp1} />
                  </div>
                  <Group10>{group10Props.children}</Group10>
                  <Group11 src={group11Props.src} className={group11Props.className} />
                </div>
              </Link>
              <div className="people-96">{people}</div>
            </div>
            <div className="flex-row-430">
              <div className="well-be-in-96 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
              <div className="overlap-group1-503">
                <div className="group-11-107 border-1px-flamingo"></div>
                <div className="mins-96 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
                <img className="line-6-102" src={line6} />
                <Link to="/shopping-carthomeselecttime11">
                  <img className="arrow-drop-down-96" src={arrowDropDown} />
                </Link>
                <div className="select-72 inter-extra-bold-black-15px">{select}</div>
              </div>
            </div>
            <Link to="/completedpreorderhome10">
              <div className="group-28-81">
                <div className="overlap-group-780">
                  <div className="complete-pre-order-56 applesdgothicneob00-regular-normal-flamingo-23px">
                    {completePreOrder}
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group2-370">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-59" src={loadedBakedPotatoSoupRecipe34} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPeople23;
