import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime1019.css";

function ShoppingCartHomeSelectTime1019(props) {
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
    x15200Won,
    line5,
    weAre,
    outline_Remove_Black_24Dp1,
    outline_Add_Black_24Dp12,
    people,
    wellBeIn,
    mins,
    line6,
    arrowDropDown,
    select,
    lessThan10,
    completePreOrder,
    component132Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime1018 screen">
        <div className="flex-col-314">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-19">
              <img className="arrow-back-43" src={arrowBack} />
              <div className="menu-55 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-95" src={line1} />
          <div className="shopping-cart-44 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-121" src={line2} />
          <div className="overlap-group2-225">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-46" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-35">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-85">
                <img className="outline-136" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-43 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-352 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-42">{total}</div>
            <div className="x15200-won-97">{x15200Won}</div>
          </div>
          <img className="line-5-51" src={line5} />
        </div>
        <div className="flex-row-353 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-82">{weAre}</div>
          <div className="group-13-68">
            <Link to="/shopping-carthomeselecttime1022">
              <div className="group-7-150">
                <img className="outline-136" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime1012">
              <div className="group-8-170">
                <img className="outline-136" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-82">{people}</div>
        </div>
        <div className="flex-row-354">
          <div className="well-be-in-82 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-143">
            <div className="overlap-group3-177 border-1px-flamingo">
              <div className="group-14-40 border-1px-flamingo"></div>
            </div>
            <div className="mins-82 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-88" src={line6} />
            <Link to="/shopping-carthomeselecttime11">
              <img className="arrow-drop-down-82" src={arrowDropDown} />
            </Link>
            <div className="select-58 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-10-33 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div>
        <Link to="/completedpreorderhome10">
          <div className="group-28-70">
            <div className="overlap-group-640">
              <div className="complete-pre-order-42 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1019;
