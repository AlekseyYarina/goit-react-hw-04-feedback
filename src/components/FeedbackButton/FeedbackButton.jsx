import css from './FeedbackButton.module.css';

export const FeedbackButton = ({ onLeaveFeedback, option }) => {
  return (
    <button
      className={css.feedbackButton}
      type="button"
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  );
};
