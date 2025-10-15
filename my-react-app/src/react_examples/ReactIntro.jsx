import React from "react";

const myElement = <h1> I Love JSX! </h1>;
const myElement1 = React.createElement('h1', {}, 'I do not use JSX!');
const myElement2 = <h1> React is {5+5} times better with JSX </h1>
const myElement3 = (
    <ul>
        <li> Apples </li>
        <li> Bananas </li>
        <li> Cherries </li>
    </ul>
);

const myElement4 = (
    <div>
        <p> I am a paragraph. </p>
        <p> I am a paragraph too. </p>
    </div>
);

const myElement5 = <input type="text" />
const myElement6 = <h1 className="myClass"> Hello World </h1>
const myElement7 = <h1> Hello {/* Wonderful */} World</h1>
function Car() {
    return (
        <>
        <h2> My Car </h2>
        <p> It is a Ford Mustang. </p>
        </>
    );
}

function Car2() {
    const brand ="Ford";
    const model ="Mustang";
    return (
        <>
        <h2> My Car </h2>
        <p> It is a {brand} {model} </p>
        </>
    );
}

function JSXIntro() {
    return(
        <>
        {myElement}
        {myElement1}
        {myElement2}
        {myElement3}
        {myElement4}    
        {myElement5}
        {myElement6}
        {myElement7}
        <Car />
        <Car2 />
        </>
    );
}

export default JSXIntro;