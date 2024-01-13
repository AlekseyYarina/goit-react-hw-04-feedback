import { FeedbackButton } from 'components/FeedbackButton/FeedbackButton';
import css from './feedback.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.feedbackBtns}>
      {options.map(option => (
        <FeedbackButton
          key={option}
          option={option}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </div>
  );
};
