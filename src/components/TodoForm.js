import React from 'react'

export default class TodoForm extends React.Component {

    render(){
        return(
            <form>
                <input name='task' type='text'/>
                <button>Add To List</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}