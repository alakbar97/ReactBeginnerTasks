import React, { Component } from 'react'
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

export default class TaskReact extends Component {
    state={
        username:"Test"
    }
    changeStateHandler=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    render() {
        return (
            <div>
                <UserInput change={this.changeStateHandler} name={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
            </div>
        )
    }
}
