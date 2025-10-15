import React from "react";

function Car() {
  return (
    <h2>Hi, I am a Car!</h2>
  );
}

function Car0(props) {
  return (
    <h2>I am a {props.color} Car!</h2>
  );
}

function Car1() {
  return (
    <h2>I am a Car!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

function Car2() {
  return (
    <h2>I am a Car!</h2>
  );
}

function Garage0() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car2 />
      <Car2 />
    </>
  );
}

function Car3(props) {
  return (
    <h2>I am a Car{props.brand}!</h2>
  );
}

function Garage1() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car3 brand="Ford" />
      <Car3 brand="BMW" />
    </>
  );
}

function Components() {
    return (
        <>
        <Car />
        <Car0 />
        <Car1 />
        <Garage />
        <Car2 />
        <Garage0 />
        <Car3 />
        <Garage1 />

        </>
    )

}
export default Components; 