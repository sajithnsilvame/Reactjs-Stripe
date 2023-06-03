import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import {useState} from "react";

const Payment = () => {

  const [amount, setAmount] = useState(170);

  const stripe = useStripe();
  const elements = useElements();

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded or rendered.
      // Make sure to initialize Stripe properly before attempting to submit the payment.
      return;
    }

    // Create a payment method using the card details entered by the user
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    const reqData = 
      {
        amount: amount,
        payment_method: paymentMethod.id,
      }
   

    if (error) {
      // Handle any errors that occurred during payment
      console.log("Payment error:", error);
    } else {
      console.log("Payment succeeded:", paymentMethod);
      // Payment succeeded, you can proceed with further actions
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/payment",reqData);

        console.log(response.data.client_secret);
        console.log(paymentMethod);

      } catch (error) {
        console.error("hello error!!",error);
      }

    }

    // Reset the form or perform any necessary actions
    // ...
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5">

          <form onSubmit={handleSubmit}>
            <CardElement options={cardElementOptions} />
            <div className="mt-2">
              <button className="btn btn-primary btn-md">Pay</button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Payment;
