import React from "react";
import './toDoList.css';
import TodoItem from "./todoItem";
import Button from "./button";
let tasks = [{
    name: "complete smt",
    id: 1,
    checked: false

}, {
    name: "complete smt",
    id: 2,
    checked: false
}, {
    name: "complete smt",
    id: 3,
    checked: false
}];


class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.setState({ elements: tasks });
    }
    handleCheck = ({ name, checked, id }) => {
        const date = new Date();
        console.log(`task ${name} was changed at ` + date.toLocaleTimeString());
        const elems = this.state.elements.map(item =>
            item === id ? { ...item, checked: !checked } : item);
        this.setState({elements:elems});
    }
    handleClick = () =>{
        let count = 0;
        this.state.elements.map(item=>item.checked && count++);
        console.log(`finished tasks: ${count} `);
    }

    render() {
        const {elements} = this.state;
        return (
            <>
                <div className="todoList">
                    {elements.map(item=>{
                       return <TodoItem key={item.id} handleCheck={this.handleCheck} >{item}</TodoItem>
                    })}
                </div>
                <Button handleClick={this.handleClick} />
            </>

        );
    }
}

export default Lists