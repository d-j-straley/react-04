import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  // useEffect is called after the component is rendered
  // and after every update

  // useEffect takes a function as an argument
  // this function is called after the component is rendered
  // and after every update
  // useEffect can return a function
  // this function is called when the component is unmounted
  // and before the next effect is run
  // this is useful for cleaning up resources
  // such as timers, subscriptions, etc.
  // useEffect can also take an array of dependencies
  // this array tells React when to run the effect
  // if the array is empty, the effect is only run once
  // if the array is not empty, the effect is run when
  // any of the dependencies change
  // in this case, the effect is run every time the count changes
  // if the effect returns a function, that function is called
  // when the component is unmounted or before the next effect is run
  // this is useful for cleaning up resources such as timers, subscriptions, etc.
  // useEffect(() => {
  //   console.log('Component mounted');
  //   return () => {
  //     console.log('Component unmounted');
  //   };
  // }, []);  
  // 
  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

    // the following is the cleanup function.
    // it has a function similar to a C++ destructor.
  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

/*
Note: To clear the timer, we had to name it.
*/