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

    resetHandler() {
        this.setState( (state) => {
            return {
                username: "",
                password: "",
                remember: false,
                loggedIn: false
            }
        })
        
    }


    componentDidUpdate() {
        console.log(this.state)
    }

    render () {
        const LoginStyle = {
            backgroundColor: this.state.password.length < 8 ? "red" : "green",
            color: "white",
        }
        return (
            <div>
                <input name="username" type="text" value={this.state.username} onChange={this.eventHandler.bind(this)} placeholder="Type Something"/>
                <input name="password" type="password" value={this.state.password} onChange={this.eventHandler.bind(this)} placeholder="Type Something"/>
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.eventHandler.bind(this)} placeholder="Type Something"/>
                 {this.state.username && this.state.password ? 
                 <button style={LoginStyle} onClick={this.clickHandler.bind(this)}>Login</button>
                 :<button disabled onClick={this.clickHandler.bind(this)}>Login</button>} 
                 <button type='reset' onClick={this.resetHandler.bind(this)}>Reset</button>
            </div>
        )
    }
}