import React from 'react';


export class Login extends React.Component {
    state = {
        name: "",
        username: "",
        password: "",
        remember: false,
        loggedIn: false
}
    eventHandler(event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState( (state) => {
            return {
                [event.target.name]: value
            }
        })
    }


    clickHandler() {
        this.setState( (state) => {
            return {
                loggedIn: true
            }
        })
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render () {
        return (
            <div>
                <input name="username" type="text" value={this.state.username} onChange={this.eventHandler.bind(this)} placeholder="Type Something"/>
                <input name="password" type="password" value={this.state.password} onChange={this.eventHandler.bind(this)} placeholder="Type Something"/>
                <input name="remember" type="checkbox" value={this.state.remember} onChange={this.eventHandler.bind(this)} placeholder="Type Something"/>
                 {this.state.username && this.state.password ? 
                 <button  onClick={this.clickHandler.bind(this)}>Login</button>
                 :<button disabled onClick={this.clickHandler.bind(this)}>Login</button>} 
            </div>
        )
    }
}

  
  
  