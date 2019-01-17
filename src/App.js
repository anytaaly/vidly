import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="container">
          <Movies />
        </main>
      </div>
    );
  }
}

export default App;
