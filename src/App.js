import {Routes,Route} from "react-router-dom";
import Home from './Home';

import Completion from "./Completion";
import PaymentForm from "./PaymentForm";
import Pay from "./Pay";


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<PaymentForm />} />
      <Route path="/completion" element={<Completion />} />
      <Route path="/pay" element={<Pay />} />
    </Routes>
  );
}

export default App;
