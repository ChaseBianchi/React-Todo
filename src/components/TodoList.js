// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {

    render(){
        return(
            <div>
            Click on a task to mark it completed.
            <div>
            {this.props.data.map((obj)=>{
                return (
                    <Todo  clickTask={this.props.clickTask} obj={obj}/>
                )
            })}
            {/* <Todo data={this.props.data}/> */}
            </div>
            </div>
        )
    }
}