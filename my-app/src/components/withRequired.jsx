import React from "react";
import InputGroup from "./InputGroup";

// const withRequired = (Component, requiredKeys) => {
//     return class WithRequired extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 isInvalid: false
//             }
//         }
//         handleInput(evt) {
//             this.setState({ [evt.target.name]: evt.target.value })
//         }
//         handleClick() {
//             const isInvalid = requiredKeys.some(key => !this.state[key])
//             this.setState({ isInvalid })
//         }
//         render() {
//             return (
//                 <>
//                     <Component
//                         onChange={e=>this.handleInput(e)}
//                         onClick={this.handleClick}
//                     />
//                     {this.state.isInvalid && 'error'}
//                 </>
//             )
//         }
//     }
// };

// export const InputWithName = withRequired(InputGroup,['first_name'])
// export const InputWithEName = withRequired(InputGroup,['first_name','email'])

class Wrapper extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isInvalid:false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleClick() {
        const {requiredKeys} = this.props;
        const isInvalid = requiredKeys.some(key=>!this.state[key]);
        this.setState({isInvalid});
    }
    handleInput(e) {
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <>
                <div>
                    {this.props.render({onChange:this.handleInput, onClick:this.handleClick})}
                </div>
                {this.state.isInvalid?'error render ':null}
            </>
        )
    }
}

export const InputWithName = () => {
    return (
        <Wrapper requiredKeys={['first_name ']} render={({onClick,onChange}) =>{return(
            <InputGroup onChange={(e)=>onChange(e)} onClick={()=>onClick()} />
        )}} />
    )
}