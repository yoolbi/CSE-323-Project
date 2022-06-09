import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime1022.css";

function ShoppingCartHomeSelectTime1022(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    loadedBakedPotatoSoupRecipe34,
    outline_Add_Black_24Dp11,
    addMoreMenu,
    total,
    x30400Won,
    line5,
    weAre,
    outline_Add_Black_24Dp12,
    people,
    wellBeIn,
    mins,
    line6,
    arrowDropDown,
    select,
    lessThan15,
    completePreOrder,
    component1321Props,
    component1322Props,
    group11Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime1021 screen">
        <div className="flex-col-319">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-22">
              <img className="arrow-back-46" src={arrowBack} />
              <div className="menu-58 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-98" src={line1} />
          <div className="shopping-cart-47 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-125" src={line2} />
          <div className="group-181">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-182">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-49" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-15">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-88">
                  <img className="outline_add_black_24dp-1-52" src={outline_Add_Black_24Dp11} />
                </div>
              </Link>
              <div className="add-more-menu-46 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-363 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-45">{total}</div>
              <div className="x30400-won-15">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-54" src={line5} />
        </div>
        <div className="flex-row-364 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-85">{weAre}</div>
          <div className="group-13-71">
            <Group11 src={group11Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime1015">
              <div className="group-8-173">
                <img className="outline_add_black_24dp-1-52" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-85">{people}</div>
        </div>
        <div className="flex-row-365">
          <div className="well-be-in-85 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-109">
            <div className="overlap-group4-148 border-1px-flamingo">
              <div className="group-14-43 border-1px-flamingo"></div>
            </div>
            <div className="mins-85 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-91" src={line6} />
            <img className="arrow-drop-down-85" src={arrowDropDown} />
            <div className="select-61 inter-extra-bold-black-15px">{select}</div>
            <Link to="/shopping-carthomeselecttime12">
              <div className="less-than-15-34 inter-extra-bold-black-15px">{lessThan15}</div>
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderhome8">
          <div className="group-28-73">
            <div className="overlap-group-669">
              <div className="complete-pre-order-45 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1022;
