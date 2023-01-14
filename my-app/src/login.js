import React from 'react';


export class Login extends React.Component {
    state = {
        name: "",
        username: "",
        password: "",
        remember: false
}
    eventHandler(event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState( (state) => {
            return {
                [event.target.name]: value
            }
        })
    }
    render () {
        return (
            <div>
                <input name="username" type="text" value={this.state.username} onChange={this.eventHandler.bind(this)} placeholder="Type Something"/>
                <input name="password" type="password" value={this.state.password} onChange={this.eventHandler.bind(this)} placeholder="Type Something"/>
                <input name="remember" type="checkbox" value={this.state.remember} onChange={this.eventHandler.bind(this)} placeholder="Type Something"/>
            </div>
        )
    }
}