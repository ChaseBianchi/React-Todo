import React from 'react'

export default class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {newTask: ''}
    }
    changeHandler = e => {
        this.setState({
          newTask: e.target.value
        })
      };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.newTask);
        this.setState({newTask: ''})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.changeHandler} name='task' type='text' value={this.state.newTask}/>
                <button>Add To List</button>
            </form>
        )
    }
}