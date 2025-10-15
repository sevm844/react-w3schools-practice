import React from "react";

function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Car2(myobj) {
  return (
    <h2>I am a {myobj.brand}!</h2>
  );
}

function Car3(props) {
  return (
    <h2>The car is from {props.year}!</h2>
  );
}

function Car4(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

let x = "Ford";

function Car5(props) {
  return (
    <>
      <h2>My favorite car is a {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>But it has to from {props.years[0]}, {props.years[1]}, or {props.years[2]}.</p>
    </>
  );
}

let a = [1964, 1965, 1966];
let b = {name: "Ford", model: "Mustang"};

function Car6(props) {
  return (
    <>
      <h2>My {props.carinfo1.name1} {props.carinfo1.model1}!</h2>
      <p>It is {props.carinfo1.color1} and it is from {props.carinfo1.year1}!</p>
    </>
  );
}

const carInfo1 = {
  name1: "Ford",
  model1: "Mustang",
  color1: "red",
  year1: 1969
};

function Car7(props) {
  return (
    <h2>My car is a {props.carinfo2[0]} {props.carinfo2[1]}!</h2>
  );
}

const carInfo2 = ["Ford", "Mustang"];

function Car8(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car8 brand="Ford" />
    </>
  );
}

function Props() {
    return(
        <>
        <Car brand ="Ford"/>
        <Car2 brand ="Ford"/>
        <Car3 year ="1969"/>
        <Car4 brand ={x} />
        <Car5 years={a} carinfo={b} />
        <Car6 carinfo1={carInfo1} />
        <Car7 carinfo2={carInfo2}/>
        <Garage />
        </>
    )
}

export default Props