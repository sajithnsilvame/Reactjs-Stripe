import React, {useContext} from 'react'
import {useNavigate} from 'react-router-dom';
import {PaymentContext} from './context/PaymentContextProvider';
import axios from 'axios';

const Pay = () => {


  const { setClientSecret } = useContext(PaymentContext);
  const navigate = useNavigate();

  const redy = () => {
    axios
      .post("http://127.0.0.1:8000/api/payment", {
        amount: 170,
      })
      .then((result) => {
        const { client_secret } = result.data;
        console.log(result.data);
        setClientSecret(client_secret);
        navigate("/payment");
      });
  };

  return (
    <div>
      <button onClick={redy}>Pay</button>
    </div>
  );
}

export default Pay