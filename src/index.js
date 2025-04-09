import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

/* 
 * This example demonstrates how to use the useEffect hook to update a state variable
 * based on the value of another state variable.  
 * The useEffect hook is called whenever the count state variable changes,
 * and it updates the calculation state variable to be twice the value of count.
 * The calculation state variable is initialized to 0.
 * The useEffect hook is used to perform side effects in functional components.
 * In this case, the side effect is updating the calculation state variable
 * whenever the count state variable changes.
 * The useEffect hook takes two arguments: a function to run and an array of dependencies.
 * The function will run whenever any of the dependencies change.
 * In this case, the function updates the calculation state variable
 */

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);