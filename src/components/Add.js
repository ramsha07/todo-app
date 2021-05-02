import React, {Component} from 'react';

class Add extends Component {
    constructor() {
        super()
            this.state ={
                todos: ["Shoaib", "Ramsha"],
                value: " "
            }
    }
    
    add_todo = () => {
        this.setState({
            todos: [...this.state.todos, this.state.value],
            value: " "
        })
    }

    render() {
        let {todos, value} = this.state
        return(
            <div>
                    <input value={value} onChange ={(e)=> this.setState({value: e.target.value}) } placeholder="Add Todos"/>
                    <button onClick={this.add_todo}>Add Todo</button>
                <ul>
                   {todos.map((item, index)=> {
                       return (
                           <li key = {index}>{item}</li>
                       )
                   })}
                </ul>
            </div>
        )
    }
}

export default Add;