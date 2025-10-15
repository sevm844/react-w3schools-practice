import React from "react";

function MyCars() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car) => <li>I am a { car }</li>)}
      </ul>
    </>
  );
}

function MyCars2() {
  const cars = [
    {id: 1001, brand: 'Ford'},
    {id: 1002, brand: 'BMW'},
    {id: 1003, brand: 'Audi'}
  ];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car) => <li key={car.id}>I am a { car.brand }</li>)}
      </ul>
    </>
  );
}

function MyCars3() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car, index) => <li key={index}>I am a { car }</li>)}
      </ul>
    </>
  );
}


function List() {
    return(
        <>
        <MyCars />
        <MyCars2 />
        <MyCars3 />
        </>
    )
}

export default List