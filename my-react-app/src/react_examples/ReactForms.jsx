import React from "react";
import { useState } from 'react';

function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}

function MyForm2() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <p>Current value: {name}</p>
    </form>
  )
}

function MyForm3() {
  const [name, setName] = useState("John");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <p>Current value: {name}</p>
    </form>
  )
}

function Forms() {
    return(
        <>
        <MyForm />
        <MyForm2 />
        <MyForm3 />
        </>
    )
}

export default Forms