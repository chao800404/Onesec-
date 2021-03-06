/** @format */

import { PaymentFromContainer } from "./paymentForm.styles";

const TypeForm = {
  firstForm: {
    firstInput: ["firstName", "text"],
    secondInput: ["secondName", "text"],
    thirdInput: ["phone", "number"],
    forthInput: ["paymentEmail", "email"],
    payment: true,
    title: "Subtotal",
  },
  secondForm: {
    firstInput: ["state", "text"],
    secondInput: ["city", "text"],
    thirdInput: ["addressLine", "text"],
    forthInput: ["ConfirmAddressLine", "text"],
    payment: null,
    title: "Shipping Destination",
  },
};

const PaymentForm = ({ type, value, totalPrice }) => {
  const { firstInput, secondInput, thirdInput, forthInput, payment, title } =
    TypeForm[type];

  return (
    <PaymentFromContainer>
      <h3 className={title?.split(" ").join("")}>{title}</h3>
      {payment ? (
        <span className="total-price">NT$: {totalPrice.toLocaleString()}</span>
      ) : null}

      <div id="fullName">
        <input
          name={firstInput[0]}
          id={firstInput[0]}
          type={firstInput[1]}
          placeholder={firstInput[0].toUpperCase()}
          defaultValue={value[firstInput[0]]}
        />
        <input
          name={secondInput[0]}
          id={secondInput[0]}
          type={secondInput[1]}
          placeholder={secondInput[0].toUpperCase()}
          defaultValue={value[secondInput[0]]}
        />
      </div>
      <input
        name={thirdInput[0]}
        type={thirdInput[1]}
        id={thirdInput[0]}
        placeholder={thirdInput[0].toUpperCase()}
        defaultValue={value[thirdInput[0]]}
      />
      <input
        name={forthInput[0]}
        type={forthInput[1]}
        id={forthInput[0]}
        placeholder={forthInput[0].toUpperCase()}
        defaultValue={value[thirdInput[0]]}
      />
    </PaymentFromContainer>
  );
};

export default PaymentForm;
