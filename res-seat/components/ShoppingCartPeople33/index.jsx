import React from "react";
import { Link } from "react-router-dom";
import Group10 from "../Group10";
import Group11 from "../Group11";
import Component132 from "../Component132";
import "./ShoppingCartPeople33.css";

function ShoppingCartPeople33(props) {
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
      <div className="shopping-cartpeople32 screen">
        <div className="group-container-111">
          <div className="group-40-5">
            <div className="flex-col-357">
              <Link to="/restaurant-details-menu1">
                <div className="group-52-57">
                  <img className="arrow-back-48" src={arrowBack} />
                  <div className="menu-63 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
                </div>
              </Link>
              <img className="line-1-103" src={line1} />
              <div className="shopping-cart-49 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
              <img className="line-2-128" src={line2} />
              <div className="group-12-38">
                <Link to="/restaurant-details-menu1">
                  <div className="group-11-91">
                    <img className="outline-138" src={outline_Add_Black_24Dp1} />
                  </div>
                </Link>
                <div className="add-more-menu-48 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
              </div>
              <div className="flex-row-372 applesdgothicneob00-regular-normal-black-28px">
                <div className="total-47">{total}</div>
                <div className="x15200-won-232">{x15200Won}</div>
              </div>
              <img className="line-5-59" src={line5} />
            </div>
            <div className="flex-row-373 applesdgothicneob00-regular-normal-black-25px">
              <div className="we-are-87">{weAre}</div>
              <Link to="/shopping-cart-people4-2">
                <div className="group-13-73">
                  <Link to="/shopping-cartpeople22">
                    <div className="group-7-152">
                      <img className="outline-138" src={outline_Remove_Black_24Dp1} />
                    </div>
                  </Link>
                  <Group10>{group10Props.children}</Group10>
                  <Group11 src={group11Props.src} className={group11Props.className} />
                </div>
              </Link>
              <div className="people-87">{people}</div>
            </div>
            <div className="flex-row-374">
              <div className="well-be-in-87 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
              <div className="overlap-group1-456">
                <div className="group-11-92 border-1px-flamingo"></div>
                <div className="mins-87 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
                <img className="line-6-93" src={line6} />
                <Link to="/shopping-carthomeselecttime7">
                  <img className="arrow-drop-down-87" src={arrowDropDown} />
                </Link>
                <div className="select-63 inter-extra-bold-black-15px">{select}</div>
              </div>
            </div>
            <Link to="/completedpreorderhome9">
              <div className="group-28-74">
                <div className="overlap-group-702">
                  <div className="complete-pre-order-47 applesdgothicneob00-regular-normal-flamingo-23px">
                    {completePreOrder}
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group2-257">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-50" src={loadedBakedPotatoSoupRecipe34} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPeople33;
