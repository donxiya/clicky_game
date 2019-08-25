import React, { Component } from "react";
import Box from "./components/Box";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./boxList.json";
import "./App.css";

class App extends Component {
  state = {
    boxlist,
    score: 0,
    message: ""
  };

  gameEnd = () => {
    this.setState({ message: "Game Over" });
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    this.state.boxlist.find((any, i) => {
      if (any.id === id) {
        if (boxlist[i].select === false) {
          boxlist[i].select = true;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score}
          highscore={this.state.message}>
          Bird Watch</Header>
        {this.state.cards.map(card => (
          <Box
            clickCount={this.clickCount}
            id={box.id}
            key={box.id}
            image={box.image}
          />
        ))}
      </Wrapper>
      <div>Source: <a href>https://www.audubon.org</a></div>
    );
  }
}

export default App;
