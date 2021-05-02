// import React, {Component} from 'react';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super() 
//     this.state = {
//       todos: ["Read Book", "Gardening", "Learn React", "Follow Bootcamp"],
//       value: " "
//     }
//   }

//   add_todo = () => {
//     this.setState({
//       todos: [...this.state.todos, this.state.value],
//       value: ""
//     })
//   }
//   render() {    
//     let {todos,value} = this.state;
//     return(
//         <div>
        
//           <input value={value} onChange={(e)=> this.setState({value: e.target.value})} type="text" placeholder="Enter Your name" />
//           <button onClick={this.add_todo}> Add Item</button>
        
//           <ul>
//             {todos.map((item, index)=> {
//               return(
//                 <li key={index}> {item}</li>
//               )
//             })}
//           </ul>
//         </div>
//     )
//   }
// }
// export default App;



import React, {Component} from 'react';
import Add from './components/Add';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Add/>
        
      </div>
    )
  }
}

export default App;