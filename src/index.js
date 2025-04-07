import { useState } from "react";
import ReactDOM from "react-dom/client";

// Note that here we are tracking just one single object: car.
// And we have various properties of the car which get tracked in the same state object.
function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

    // we reference the properties of the car object using dot notation (of course).
    
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);