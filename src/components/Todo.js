import React from 'react'

export default class Todo extends React.Component {

    render(){
        return(
            <div onClick={()=>this.props.clickTask(this.props.obj.id)}
            style={{textDecorationLine: this.props.obj.completed===true ? 'line-through' : 'none'}}
            >{this.props.obj.task}</div>
        )
    }
}