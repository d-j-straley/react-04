import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "50px",
    fontFamily: "Sans-Serif",
    textAlign: "center",
    fontSize: "20px",
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);