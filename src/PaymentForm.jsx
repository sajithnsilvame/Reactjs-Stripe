import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {useContext} from "react";
import {PaymentContext} from "./context/PaymentContextProvider";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(
  "pk_test_51NCO2fErN5lJYbhbz5i6FxJlEKlx91DKBtWVcZLUkSXFk8HLJLnrMalTxYvu7t2Em8ykXPQ5LHpWz0yyDDgEOaVL00Bi3vC00f"
);

const PaymentForm = () => {
  const { clientSecret } = useContext(PaymentContext);
  return (
    <div>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PaymentForm;
