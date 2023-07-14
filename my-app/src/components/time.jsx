import React from "react";

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         date : new Date()

        }
    }
    componentDidMount() {
        this.timerId = setInterval(()=>this.tick(),1000)
    }
    tick() {
        this.setState({
            date: new Date()
        });   
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        const {date} = this.state;

        return (
        <div>{date.toLocaleTimeString()}</div>
        )
    }
}

export default Time;