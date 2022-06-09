import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime510.css";

function ShoppingCartHomeSelectTime510(props) {
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
    lessThan1,
    completePreOrder,
    component132Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime59 screen">
        <div className="flex-col-312">
          <Link to="/restaurant-details-menu1">
            <div className="group-54-10">
              <img className="arrow-back-41" src={arrowBack} />
              <div className="menu-53 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-93" src={line1} />
          <div className="shopping-cart-42 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-119" src={line2} />
          <div className="overlap-group2-224">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-44" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-34">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-83">
                <img className="outline-135" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-41 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-346 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-40">{total}</div>
            <div className="x15200-won-96">{x15200Won}</div>
          </div>
          <img className="line-5-49" src={line5} />
        </div>
        <div className="flex-row-347 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-80">{weAre}</div>
          <div className="group-13-66">
            <Link to="/shopping-carthomeselecttime511">
              <div className="group-7-149">
                <img className="outline-135" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime57">
              <div className="group-8-168">
                <img className="outline-135" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-80">{people}</div>
        </div>
        <div className="flex-row-348">
          <div className="well-be-in-80 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-141">
            <div className="overlap-group3-175 border-1px-flamingo">
              <div className="group-14-38 border-1px-flamingo"></div>
            </div>
            <div className="mins-80 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-86" src={line6} />
            <Link to="/shopping-carthomeselecttime11">
              <img className="arrow-drop-down-80" src={arrowDropDown} />
            </Link>
            <div className="select-56 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-1-17 inter-extra-bold-black-15px">{lessThan1}</div>
          </div>
        </div>
        <Link to="/completedpreorderhome10">
          <div className="group-28-68">
            <div className="overlap-group-638">
              <div className="complete-pre-order-40 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime510;
