import PropTypes from 'prop-types';

const FeedbackOptions = ({ onFeedback }) => {
  return (
    <div>
      <button
        type="button"
        name="good"
        onClick={e => onFeedback(e.target.name)}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={e => onFeedback(e.target.name)}
      >
        Neutral
      </button>
      <button type="button" name="bad" onClick={e => onFeedback(e.target.name)}>
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;

FeedbackOptions.prototypes = {
  onFeedback: PropTypes.func.isRequired,
};
