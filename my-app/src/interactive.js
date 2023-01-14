import React from 'react';

export class Welcome extends React.Component {
    render() {
      return <div>
        <h1>
          Welcome, {this.props.name || "Undefined User"}!
        </h1>
      </div>
    }
  }

export class InteractiveWelcome extends React.Component {
    state = {
        name: ""
    }
    eventHandler(event) {
        this.setState( (state) => {
            return {
                name: event.target.value
            }
        })
    }

    render() {
        return( 
            <div>
            
                <input type="text" value={this.state.name} onChange={this.eventHandler.bind(this)} placeholder="Type Something"/>
                <Welcome name={this.state.name} />
                
            </div>
        )
    }
}