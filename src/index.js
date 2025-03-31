import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  const carName = "Toyota";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      /*
      Note that it is *here* that we define what the input parameter
      of the Car component will be. The Car component will
      receive the value of carName as a prop, and we can use
      it in the Car component.
      And in the Car component, we refer to that value via the "variable name"
      which was defined in the *calling* component, which here is: "brand."
      */
      "
	    <Car brand={ carName } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);