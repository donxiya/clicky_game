import React, { Component } from "react";
import Box from "./components/Box";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import boxList from "./boxList.json";
import "./App.css";

class App extends Component {
  state = {
    boxList,
    score: 0,
    message: "Don't Pick the Same Bird!"
  };

  gameEnd = () => {
    this.setState({ message: "Game Over" });
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    this.state.boxList.find((any, i) => {
      if (any.id === id) {
        if (boxList[i].select === false) {
          boxList[i].select = true;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.boxList.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameEnd();
        }
      }
    });
  }
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score}
          message={this.state.message}>
          Bird Watch</Header>
        {this.state.boxList.map(box => (
          <Box
            clickCount={this.clickCount}
            id={box.id}
            key={box.id}
            image={box.image}
          />
        ))}
        <div>Source: <a href>https://www.audubon.org</a></div>
      </Wrapper>
    )
  }
}

export default App;
