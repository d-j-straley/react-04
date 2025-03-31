import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <h2>We've got a {props.brand.name} { props.brand.model } here!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
	    <h1>What kind of car is that in my garage?</h1>
	    <Car brand={ carInfo } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);