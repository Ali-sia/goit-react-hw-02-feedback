import PropTypes from 'prop-types';
import { ButtonFeedback } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onFeedback }) => {
  let optionsKeys = Object.keys(options);

  return (
    <>
      {optionsKeys.map(option => (
        <ButtonFeedback
          type="button"
          name={option}
          onClick={e => onFeedback(e.target.name)}
        >
          {capitalizeFirstLetter(option)}
        </ButtonFeedback>
      ))}
      {/* <ButtonFeedback
        type="button"
        name="good"
        onClick={e => onFeedback(e.target.name)}
      >
        Good
      </ButtonFeedback>
      <ButtonFeedback
        type="button"
        name="neutral"
        onClick={e => onFeedback(e.target.name)}
      >
        Neutral
      </ButtonFeedback>
      <ButtonFeedback
        type="button"
        name="bad"
        onClick={e => onFeedback(e.target.name)}
      >
        Bad
      </ButtonFeedback> */}
    </>
  );
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default FeedbackOptions;

FeedbackOptions.prototypes = {
  onFeedback: PropTypes.func.isRequired,
};
