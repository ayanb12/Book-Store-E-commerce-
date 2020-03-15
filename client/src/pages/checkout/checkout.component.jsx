import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "./../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartTotal
} from "./../../redux/cart/cart.selectors";
import StripeCheckoutButton from "./../../components/stripe-button/stripe-button.component";
import { selectCurrentUser } from "./../../redux/user/user.selectors";

const CheckoutPage = ({ cartItems, total, user }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>TOTAL: &#x20B9; {total}</span>
    </div>
    {user ? <StripeCheckoutButton price={total} /> : <Redirect to="/signin" />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  user: selectCurrentUser
});

export default connect(mapStateToProps)(CheckoutPage);
