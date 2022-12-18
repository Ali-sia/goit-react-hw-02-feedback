import React, { Component } from 'react';
// import { GlobalStyle } from './GlobalStyle';

export const Buttons = ({
  onGoodFeedback,
  onNeutralFeedback,
  onBadFeedback,
}) => {
  {
    return (
      <div>
        <button type="button" onClick={onGoodFeedback}>
          Good
        </button>
        <button type="button" onClick={onNeutralFeedback}>
          Neutral
        </button>
        <button type="button" onClick={onBadFeedback}>
          Bad
        </button>
      </div>
    );
  }
};
