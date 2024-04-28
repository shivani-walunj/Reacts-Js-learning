import React from "react";

//function Greet(){
//   return <h1> Hello Shivani </h1>
// }
const Greet = ({ name, heroName }) => {
  // const { name, heroName } = props;
  // const { heroName } = props;
  console.log(name);
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Greet;
