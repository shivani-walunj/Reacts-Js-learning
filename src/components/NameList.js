import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Shivani", "Aditya", "Bruce"];
  const persons = [
    {
      id: 1,
      name: "Aditya",
      age: 20,
      skill: "React",
    },
    {
      id: 2,
      name: "Shivani",
      age: 22,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Kartik",
      age: 20,
      skill: "Vue",
    },
  ];
  // const personList = persons.map((person) => <Person person={person}></Person>);
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  return <div>{nameList}</div>;
  // return <div>{personList}</div>
}

export default NameList;
