import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles01.css';

/*
 * note that when importing a separate CSS file,
 * that file is written in normal CSS syntax, using
 * normal CSS selectors, not CSS-in-JS syntax camelCase
 * styles.
 */

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);