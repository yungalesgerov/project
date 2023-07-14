import React from "react";
// import Time from './components/time';
import Lists from './components/toDoList/toDoList';
import { InputWithEName, InputWithName } from "./components/withRequired";
function App() {
  return (
    <>
    <h1>hello world</h1>
    {/* <Time /> */}
    <Lists  /> 
    <h1>patters</h1>
    <InputWithName />
    {/* <InputWithEName/> */}
    </>
  );
}

export default App;
