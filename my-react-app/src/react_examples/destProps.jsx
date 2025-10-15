import React from "react";

function Car({color}) {
  return (
    <h2>My car is {color}!</h2>
  );
}

function Car1(props) {
  const {brand, model} = props;
  return (
    <h2>I love my {brand} {model}!</h2>
  );
}

function Car2({color, brand, ...rest}) {
  return (
    <h2>My {brand} {rest.model} is {color}!</h2>
  );
}

function Car3({color = "blue", brand}) {
  return (
    <h2>My {color} {brand}!</h2>
  );
}


function Destructuring() {
   return (
    <>
    <Car brand="Ford" model="Mustang" color="red" year={1969}/>
    <Car1 brand="Ford" model="Mustang" color="red" year={1969}/>
    <Car2 brand="Ford" model="Mustang" color="red" year={1969}/>
    <Car3 brand="Ford" model="Mustang" color="red" year={1969}/>
    </>
   )
}

export default Destructuring