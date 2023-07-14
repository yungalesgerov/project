import React from 'react';

const InputGroup = props => {
  return (
    <>
      <input onChange={props.onChange} name="first_name" type="text" />
      <input onChange={props.onChange} name="second_name" type="text" />
      <input onChange={props.onChange} name="email" type="text" />
      <button onClick={props.onClick}>Click</button>
    </>
  );
};

export default InputGroup;