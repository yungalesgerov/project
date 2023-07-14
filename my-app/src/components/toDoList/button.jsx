import React from "react";
import './toDoList.css';

class Button extends React.Component {
    
    
    render() {

        return (
            <button onClick={this.props.handleClick} className="btn">Count finished Tasks</button>
        )
    }

}

export default Button;