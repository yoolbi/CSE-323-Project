import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group252 from "../Group252";
import "./ShoppingCartHomeSelectTime13.css";

function ShoppingCartHomeSelectTime13(props) {
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
    component1321Props,
    component1322Props,
    group11Props,
    group10Props,
    group252Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime12 screen">
        <div className="flex-col-386">
          <Link to="/restaurant-details-menu1">
            <div className="group-53-11">
              <img className="arrow-back-55" src={arrowBack} />
              <div className="menu-70 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-110" src={line1} />
          <div className="shopping-cart-56 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-135" src={line2} />
          <div className="group-177">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-195">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-56" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-18">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-103">
                  <img className="outline_add_black_24dp-1-57" src={outline_Add_Black_24Dp11} />
                </div>
              </Link>
              <div className="add-more-menu-55 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-392 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-54">{total}</div>
              <div className="x30400-won-18">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-66" src={line5} />
        </div>
        <div className="flex-row-393 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-94">{weAre}</div>
          <div className="group-13-80">
            <Group11 src={group11Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime8">
              <div className="group-8-179">
                <img className="outline_add_black_24dp-1-57" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-94">{people}</div>
        </div>
        <div className="overlap-group5-113">
          <div className="overlap-group4-161">
            <div className="overlap-group-709">
              <div className="complete-pre-order-54 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
            <div className="group-11-104 border-1px-flamingo"></div>
            <div className="mins-94 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-100" src={line6} />
            <img className="arrow-drop-down-94" src={arrowDropDown} />
            <div className="select-70 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group1-458">
              <Group252
                line6={group252Props.line6}
                line7={group252Props.line7}
                line8={group252Props.line8}
                className={group252Props.className}
              />
              <Link to="/shopping-carthomeselecttime510">
                <div className="less-than-1-22 inter-extra-bold-black-15px">{lessThan1}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime510">
                <div className="less-than-5-26 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime1020">
                <div className="less-than-10-38 inter-extra-bold-black-15px">{lessThan10}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime1021">
                <div className="less-than-15-37 inter-extra-bold-black-15px">{lessThan15}</div>
              </Link>
            </div>
          </div>
          <div className="well-be-in-94 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime13;
