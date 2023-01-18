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
                items: [...state.items, newItem],
                item: ""
            }
        })
    }

    handleReset() {
        this.setState((state) => {
            return {
                items: [],
                item: ""
            }
        })
    }
    handleRemove(index) {
        let items = this.state.items;
        items.splice(index, 1);
        this.setState({ items });
    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.item} onChange={this.inputHandler.bind(this)} placeholder="Add an item" />
                <button onClick={this.handleClick.bind(this)} >Add</button>
                <button onClick={this.handleReset.bind(this)} >Reset</button>
                <ul>
                    {this.state.items.map((item, index) => {
                        return <li key={"todo" + index}>
                            {item}
                            <button onClick={() => this.handleRemove(index)}
                            >Remove
                            </button>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}