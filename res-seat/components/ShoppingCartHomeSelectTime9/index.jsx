import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group252 from "../Group252";
import "./ShoppingCartHomeSelectTime9.css";

function ShoppingCartHomeSelectTime9(props) {
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
    outline_Remove_Black_24Dp1,
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
    group10Props,
    group252Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime8 screen">
        <div className="flex-col-311">
          <Link to="/restaurant-details-menu1">
            <div className="group-53-8">
              <img className="arrow-back-40" src={arrowBack} />
              <div className="menu-52 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-92" src={line1} />
          <div className="shopping-cart-41 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-118" src={line2} />
          <div className="group-185">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-174">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-43" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-12">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-81">
                  <img className="outline-134" src={outline_Add_Black_24Dp11} />
                </div>
              </Link>
              <div className="add-more-menu-40 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-344 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-39">{total}</div>
              <div className="x30400-won-12">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-48" src={line5} />
        </div>
        <div className="flex-row-345 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-79">{weAre}</div>
          <div className="group-13-65">
            <Link to="/shopping-carthomeselecttime12">
              <div className="group-7-148">
                <img className="outline-134" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime3">
              <div className="group-8-167">
                <img className="outline-134" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-79">{people}</div>
        </div>
        <div className="overlap-group5-106">
          <div className="overlap-group4-140">
            <div className="overlap-group-637">
              <div className="complete-pre-order-39 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
            <div className="group-11-82 border-1px-flamingo"></div>
            <div className="mins-79 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-85" src={line6} />
            <img className="arrow-drop-down-79" src={arrowDropDown} />
            <div className="select-55 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group1-334">
              <Group252
                line6={group252Props.line6}
                line7={group252Props.line7}
                line8={group252Props.line8}
                className={group252Props.className}
              />
              <Link to="/shopping-carthomeselecttime56">
                <div className="less-than-1-16 inter-extra-bold-black-15px">{lessThan1}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime56">
                <div className="less-than-5-23 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime1014">
                <div className="less-than-10-32 inter-extra-bold-black-15px">{lessThan10}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime1015">
                <div className="less-than-15-32 inter-extra-bold-black-15px">{lessThan15}</div>
              </Link>
            </div>
          </div>
          <div className="well-be-in-79 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime9;
