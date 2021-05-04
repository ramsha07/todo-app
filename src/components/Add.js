import React, {Component} from 'react';

class Add extends Component {
    constructor() {
        super()
            this.state ={
                todos: [{title: "  ", edit: false}, {title: " ", edit: false},],
                value: " ",
                edit_value: " ",
            }
    }
    
    add_todo = () => {
        let obj = {title: this.state.value}
        this.setState({
            todos: [...this.state.todos, obj],
            value: " "
        })
    }

    delete_todo = (index) => {
        this.state.todos.splice(index, 1);
        this.setState({
            todos: this.state.todos
        })
    }

    edit_todo=(index)=> {
        this.state.todos[index].edit = true;
        this.setState({
            todos: this.state.todos
        })
    }

    handleChange = (e, index)=> {
        this.state.todos[index].title = e.target.value;
        this.setState({
            todos: this.state.todos
        })
    }

    update = (index) => {
        this.state.todos[index].edit = false;
        this.setState({
            todos: this.state.todos
        })
    }
    render() {
        let {todos, value} = this.state
        return(
            <div>
                    <input value={value} onChange={(e)=> this.setState({value: e.target.value}) } placeholder="Add Todos"/>
                    <button onClick={this.add_todo}>Add Todo</button>
                <ul>
                   {todos.map((item, index)=> {
                       return (
                           <li key = {index}>
                               {item.edit ? <input type="text" onChange={(e)=> this.handleChange(e, index)}/>: item.title}
                                {item.edit ? 
                                    <button onClick={()=> this.update(index)} >Update</button>
                                    :
                                    <button onClick={()=> this.edit_todo(index, item.title)} >Edit</button>
                                }
                           
                           <button onClick={() => this.delete_todo(index)}>Delete</button>
                           </li>
                       )
                   })}
                </ul>
            </div>
        )
    }
}

export default Add;