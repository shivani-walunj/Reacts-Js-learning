import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // conditional rendering using short circuit operators
    return this.state.isLoggedIn && <div>Welcome Shivani</div>;

    // conditional rendering using Ternary Conditional operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Shivani</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    // Element Variable Conditional Rendering
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Shivani </div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
    // if/Else Conditional Redering
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Shivani </div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Shivani</div>
    //     <div>Welcome Guests</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
