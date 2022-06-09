import React from "react";
import { Link } from "react-router-dom";
import "./ShoppingCartEmpty.css";

function ShoppingCartEmpty(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    shoppingCart1,
    yourShoppingCartIsEmpty,
    outline_Add_Black_24Dp1,
    addMoreMenu,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cart-empty screen">
        <Link to="/restaurant-details-menu1">
          <div className="group-52-51">
            <img className="arrow-back" src={arrowBack} />
            <div className="menu-12 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
          </div>
        </Link>
        <img className="line-1-52" src={line1} />
        <div className="shopping-cart applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
        <img className="line-2-56" src={line2} />
        <div className="shopping-container">
          <img className="shopping-cart-1" src={shoppingCart1} />
          <div className="your-shopping-cart-is-empty applesdgothicneob00-regular-normal-black-30px">
            {yourShoppingCartIsEmpty}
          </div>
        </div>
        <div className="overlap-group-473">
          <Link to="/restaurant-details-menu1">
            <div className="group-11-29">
              <img className="outline_add_black_24dp-1-46" src={outline_Add_Black_24Dp1} />
            </div>
          </Link>
          <div className="add-more-menu">{addMoreMenu}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartEmpty;
