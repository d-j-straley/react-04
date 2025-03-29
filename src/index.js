import React from 'react';
import ReactDOM from 'react-dom/client';
// import Car from './Car';
// import Mercedes from './Mercedes';


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

// class Cycle extends React.Component
// {
//     constructor()
//     {
//         super
//         (
//             console.log("The Cycle class has been constructed!")
//         );
//         this.state = {color: "red"};
//     }
//     render()
//     {
//         return <h2>This is a {this.state.color} Cycle class!</h2>;
//     }
// }


/*
class Pickup extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            brand: "Ford",
            model: "F-150",
            color: "blue",
            year: 2021
        };
    }    

    changeColor = () => 
    {
        if (this.state.color === "blue")
        {
            this.setState({ color: "red" });
        }
        else
        {   
            this.setState({ color: "blue" });
        }
    }

    render()
    {
        return (
            <div>
                <h2>This is a {this.state.brand} Pickup class!</h2>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.
                </p>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}
*/








// class Coup extends React.Component
// {
//     render()
//     {
//         return <h2>This is a Coup class!</h2>;
//     }
// }

// function Honda()
// {
//     return <h2>This is the output of a Honda function!</h2>;
// }

// function Garage()
// {
//     return (
//         <div>
//             <h1>Who lives in my garage?</h1>
//             <Honda />
//         </div>
//     );
// }   

// class Mercedes extends React.Component
// {
//     render()
//     {
//         return <h2>This is a Mercedes class!</h2>;
//     }
// }

// class Garage extends React.Component
// {
//     render()
//     {
//         return (
//             <div>
//                 <h1>Who lives in my garage?</h1>
//                 <Mercedes />
//             </div>
//         );
//     }
// }

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header favcol="yellow" />);


/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Pickup />);
*/
