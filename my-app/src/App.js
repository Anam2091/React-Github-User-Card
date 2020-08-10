import React from "react";
import "./App.css";
import axios from "axios";
import Display from "./Display";
import Followers from "./Followers"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      github: {},
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Anam2091")
      .then((res) => {
        this.setState({ github: res.data });
        axios
          .get("https://api.github.com/users/Anam2091/followers")
          .then((res) => {
            console.log(res);
            this.setState({ followers: res.data });
            console.log(this.state);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Display passingprops={this.state.github} />
        {this.state.followers.map((follower) => (
        <Followers nextprop={follower}/>
  ))}

      </div>
    );
  }
}

export default App;
