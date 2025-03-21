import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car';


// const myElement = <h1>Hello React!</h1>

// const myArray = ['apple', 'banana', 'cherry'];
// const myList = myArray.map((item) => <li>{item}</li>);
// const myElement = <ul>{myList}</ul>;


// const myElement = (
//     <table>
//         <tr>
//             <th>Name</th>
//         </tr>
//         <tr>
//             <td>John</td>
//         </tr>
//         <tr>
//             <td>Elsa</td>
//         </tr>   
//     </table>
// );

// const myElement = <h1>Hello World</h1>
 
// const x = 5;
// const text = "";
// const myElement = (
//     <div>
//         <h1>Hello World</h1>
//         {x > 5 ? <p>Yes</p> : <p>No</p>}
//         {text || <p>Text is empty</p>}
//     </div>
// );


function Honda()
{
    return <h2>This is the output of a Honda function!</h2>;
}

function Garage()
{
    return (
        <div>
            <h1>Who lives in my garage?</h1>
            <Honda />
        </div>
    );
}   

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<Car/>);

