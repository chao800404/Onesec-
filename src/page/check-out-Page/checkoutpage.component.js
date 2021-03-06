/** @format */
import data from "./checkoutPage.data";
import { Flex } from "../../components/Flex/flex.styles";
import { useSelector } from "react-redux";
import {
  selectClassificationCartItem,
  selectCartAmount,
} from "../../redux/cart/cart.select";
import {
  CheckoutContainer,
  CheckoutListContainer,
  CheckoutPament,
  CheckoutHeader,
  CheckoutSignIn,
  CheckoutPageContainer,
} from "./checkoutpage.styles";
import { selectCurrentUser } from "../../redux/user/user.select";
import { useNavigate } from "react-router-dom";
import CheckoutList from "../../components/checkout-list/checkout-list.component";
import Button from "../../components/button/button.component";
import { useState } from "react";
import Payment from "../../components/payment/payment.component";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "../../utils/stripe.utils";

const CheckOutPage = () => {
  const cartItem = useSelector(selectClassificationCartItem);
  const totalQuantity = useSelector(selectCartAmount);
  const navigate = useNavigate();

  const existUser = useSelector(selectCurrentUser);
  const [toggleHidden, setToggleHidden] = useState(false);

  const handleTransferSignIn = (e) => {
    const btnType = e.target.dataset.type;
    if (btnType === "sign-in") navigate("/signin", { replace: true });
    if (btnType === "reject") setToggleHidden((prev) => (prev = true));
  };

  return (
    <CheckoutPageContainer>
      <Flex>
        <CheckoutContainer>
          {existUser || toggleHidden ? null : (
            <CheckoutSignIn onClick={handleTransferSignIn}>
              <span>
                Already a member? Login for easier order tracking and
                fastercheckout!
              </span>
              <Button
                data="reject"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #161616",
                  color: "#161616",
                }}
              >
                REJECT
              </Button>
              <Button data="sign-in">SIGN IN</Button>
            </CheckoutSignIn>
          )}

          <CheckoutListContainer>
            <h1>{data.title}</h1>
            <p>
              {data.shippingStatement[0]}
              <br />
              {data.shippingStatement[1]}
            </p>
            <CheckoutHeader>
              <span>ITEM(S) &nbsp; {totalQuantity}</span>
              <span>PRODCUT</span>
              <span>PRICE</span>
              <span>QTY</span>
              <span>SUB TOTAL</span>
            </CheckoutHeader>
            {cartItem.map((cartItem, index) => (
              <CheckoutList key={index} {...cartItem} />
            ))}
          </CheckoutListContainer>
          <CheckoutPament>
            <Elements stripe={getStripe()}>
              <Payment cartItem={cartItem} />
            </Elements>
          </CheckoutPament>
        </CheckoutContainer>
      </Flex>
    </CheckoutPageContainer>
  );
};

export default CheckOutPage;
