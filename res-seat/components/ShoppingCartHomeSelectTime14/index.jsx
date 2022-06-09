import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group252 from "../Group252";
import "./ShoppingCartHomeSelectTime14.css";

function ShoppingCartHomeSelectTime14(props) {
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
    outline_Add_Black_24Dp12,
    people,
    completePreOrder,
    mins,
    line6,
    arrowDropDown,
    select,
    lessThan1,
    lessThan5,
    lessThan10,
    lessThan15,
    wellBeIn,
    component132Props,
    group11Props,
    group10Props,
    group252Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime13 screen">
        <div className="flex-col-446">
          <Link to="/restaurant-details-menu1">
            <div className="group-53-12">
              <img className="arrow-back-58" src={arrowBack} />
              <div className="menu-81 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-124" src={line1} />
          <div className="shopping-cart-59 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-145" src={line2} />
          <div className="overlap-group2-371">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-60" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-45">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-108">
                <img className="outline_add_black_24dp-1-59" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-58 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-432 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-57">{total}</div>
            <div className="x15200-won-239">{x15200Won}</div>
          </div>
          <img className="line-5-80" src={line5} />
        </div>
        <div className="flex-row-433 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-97">{weAre}</div>
          <div className="group-13-83">
            <Group11 src={group11Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime11">
              <div className="group-8-181">
                <img className="outline_add_black_24dp-1-59" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-97">{people}</div>
        </div>
        <div className="overlap-group4-181">
          <div className="overlap-group3-233">
            <div className="overlap-group-782">
              <div className="complete-pre-order-57 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
            <div className="group-11-109 border-1px-flamingo"></div>
            <div className="mins-97 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-103" src={line6} />
            <img className="arrow-drop-down-97" src={arrowDropDown} />
            <div className="select-73 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group1-504">
              <Group252
                line6={group252Props.line6}
                line7={group252Props.line7}
                line8={group252Props.line8}
                className={group252Props.className}
              />
              <Link to="/shopping-carthomeselecttime511">
                <div className="less-than-1-23 inter-extra-bold-black-15px">{lessThan1}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime511">
                <div className="less-than-5-27 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime1022">
                <div className="less-than-10-39 inter-extra-bold-black-15px">{lessThan10}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime1023">
                <div className="less-than-15-39 inter-extra-bold-black-15px">{lessThan15}</div>
              </Link>
            </div>
          </div>
          <div className="well-be-in-97 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime14;
