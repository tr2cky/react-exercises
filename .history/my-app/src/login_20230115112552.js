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
        this.setState((state) => {
            return {
                [event.target.name]: value
            }
        })
    }


    clickHandler() {
        this.setState((state) => {
            return {
                loggedIn: true
            }
        })
    }

    resetHandler() {
        this.setState((state) => {
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

    render() {
        return (
            <div>
                <input name="username" type="text" value={this.state.username} onChange={this.eventHandler.bind(this)} placeholder="Type Something" />
                <input name="password" type="password" value={this.state.password} onChange={this.eventHandler.bind(this)} placeholder="Type Something" />
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.eventHandler.bind(this)} placeholder="Type Something" />
                {this.state.username && this.state.password ?
                    <button onClick={this.clickHandler.bind(this)}>Login</button>
                    : <button disabled onClick={this.clickHandler.bind(this)}>Login</button>}
                <button type='reset' onClick={this.resetHandler.bind(this)}>Reset</button>
            </div>
        )
    }
}

export class UncontrolledLogin extends React.Component {
    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;
        
        console.log(username, password, remember)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input autoFocus name="username" type="text" placeholder="Type Something" />
                    <input name="password" type="password" placeholder="Type Something" />
                    <input name="remember" type="checkbox" placeholder="Type Something" />
                    <button type='submit' >Login</button>
                    <button type='reset' >Reset</button>
                </form>
            </div>
        )
    }
}