import { useState } from 'react';
import { FeedbackOptions } from './feedback/feedback';
import { Statistics } from './statistic/statistic';
import { Section } from './section/section';
import { Notifacation } from './notification/notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const getTotal = () => {
    return good + neutral + bad;
  };

  const getPositiveFeedback = () => {
    const totalFeedback = good + neutral + bad;
    if (totalFeedback === 0) {
      return 0;
    }
    const positiveFeedbackPercentage = (good / totalFeedback) * 100;
    return parseFloat(positiveFeedbackPercentage.toFixed(0));
  };

  const totalFeedback = getTotal();

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      {totalFeedback > 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={getPositiveFeedback()}
          />
        </Section>
      ) : (
        <Notifacation message="No feedback yet" />
      )}
    </div>
  );
};
