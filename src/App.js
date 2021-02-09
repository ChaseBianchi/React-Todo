import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {data: [{task: 'test task', id: 1, completed: false}]}
  }
  
  addItem = (item)=>{

    this.setState({
      data: [...this.state.data, {task: item, id: Date.now(), completed: false}]
    })
  }

  clickTask = (clickedItemId)=>{
    this.setState({
      data: this.state.data.map((item)=>{
        if(item.id===clickedItemId){
          return{
            ...item, completed: !item.completed,
          }
        }else{return item}
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      <TodoForm addItem={this.addItem} data={this.state.data}/>
      <TodoList clickTask={this.clickTask} data={this.state.data}/>
      </div>
    );
  }
}

export default App;
