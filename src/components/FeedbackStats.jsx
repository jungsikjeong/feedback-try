import React, { useContext } from 'react';
import styled from 'styled-components';

import FeedbackContext from '../context/FeedbackContext';

const StateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;

  average = average.toFixed(1);

  return (
    <StateWrapper>
      {/* 설정할 것 */}
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </StateWrapper>
  );
};

export default FeedbackStats;
