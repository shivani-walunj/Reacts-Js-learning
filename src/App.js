import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import cssStyles from "./cssStyles.module.css";
import Form from "./components/Form";

class App extends Component {
  render() {
    // const names = ["Shivani", "Aditya"];
    return (
      <div className="App">
        <Form />
        {/* <h1 className={cssStyles.success}>Success</h1>
        <h1 className="error">Error</h1>
        <Inline /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
        {/* //     {names.map((name) => {
    //       return <NameList naam={name} />;
    //     })} */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <Counter />
        <Message />
        <FunctionClick />
        <ClassClick /> */}
        {/* <Greet name="Shivani" heroName="Wonder Woman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Aditya" heroName="Superman">
          <button>Action</button>
        </Greet> */}
      </div>
    );
  }
}

export default App;
