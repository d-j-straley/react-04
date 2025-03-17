const message = () => {
  const name = "Jesse";
  const age = 41;
  return name + ' is ' + age + ' years old.';
};

export default message;

// this is actually exporting a function that returns a string.The function is called message and it returns a string that says "Jesse is 41 years old.".
// The function is exported as the default export, so when we import it, we can name it whatever we want.
//     also, this is different than importing a named export, because in that
// case we are really importing Properties, not a function.
