import React from "react";

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

class Car2 extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}

class Car3 extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

class Car4 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}

class Car5 extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car />
      </div>
    );
  }
}



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

class Header2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

class Header3 extends React.Component {
  render() {
    return (
      <h1>This is the content of the Header component</h1>
    );
  }
}

class Header4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

class Header5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor1: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor1: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor1}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

class Header6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor2: "red"};
  }
  shouldComponentUpdate() {
    return false;
  }
  changeColor = () => {
    this.setState({favoritecolor2: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor2}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

class Header7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor2: "red"};
  }
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({favoritecolor2: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor2}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

class Header8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor3: "red"};
  }
  changeColor = () => {
    this.setState({favoritecolor3: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor3}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

class Header9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor4: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor4: "yellow"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor4;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor4;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor4}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

function Class() {
    return(
        <>
        <Car />
        <Car2 />
        <Car3 />
        <Car4 model = "Mustang"/>
        <Garage />
        <Header />
        <Header2 favcol ="yellow"/>
        <Header3 />
        <Header4 />
        <Header5 />
        <Header6 />
        <Header7 />
        <Header8 />
        <Header9 />
        </>
    )
}

export default Class