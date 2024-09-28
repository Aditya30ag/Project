import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-publishable-key-here');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",position:"relative",top:"220px"}}>
        <img height="200px" src="/qrcode.png" alt="error"></img>
      </div>
    </Elements>
  );
}

export default App;
