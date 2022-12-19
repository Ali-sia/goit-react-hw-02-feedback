import PropTypes from 'prop-types';
import { ButtonFeedback } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onFeedback }) => {
  return (
    <>
      <ButtonFeedback
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
      </ButtonFeedback>
    </>
  );
};
export default FeedbackOptions;

FeedbackOptions.prototypes = {
  onFeedback: PropTypes.func.isRequired,
};
