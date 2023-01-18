import React from "react";

export class TodoList extends React.Component {
    state = {
        items: [],
        item: ""
    }

    inputHandler(event) {
        this.setState((state) => {
            return {
                item: event.target.value
            }
        })
    }


    handleClick() {
        let newItem = this.state.item;
        this.setState((state) => {
            return {
                items: [...state.items, newItem]
            }
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.item} onChange={this.inputHandler.bind(this)} placeholder="Add an item" />
                <button onClick={this.handleClick.bind(this)} >Add</button>
                <ul>
                    {this.state.items.map((item, index) => {
                        return <li key={"todo" + index}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}