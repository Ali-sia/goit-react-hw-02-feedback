import React, { Component } from 'react';

import { GlobalStyle } from './GlobalStyle';
import { Buttons } from './Buttons/Buttons';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = e => {
    console.log(' :>> Good');
    console.log(e.target);
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutralFeedback = e => {
    console.log(' :>> Neutral');
    console.log(e.target);

    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleBadFeedback = e => {
    console.log(' :>> Bad');
    console.log(e.target);

    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <p>Please leave feedback</p>
        <Buttons
          onGoodFeedback={this.handleGoodFeedback}
          onNeutralFeedback={this.handleNeutralFeedback}
          onBadFeedback={this.handleBadFeedback}
        />
        <p> Statistics</p>
        <p> Good: {good}</p>
        <p> Neutral:{neutral}</p>
        <p> Bad:{bad}</p>
        <GlobalStyle />
      </div>
    );
  }
}
