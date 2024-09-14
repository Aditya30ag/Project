import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './Checkoutform';

const stripePromise = loadStripe('your-publishable-key-here');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div className="container App">
        <main>
          <div style={{marginTop:"200px"}}></div>
          <CheckoutForm />
        </main>
      </div>
    </Elements>
  );
}

export default App;
