import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import FeedbackContext from '../context/FeedbackContext';

import FeedbackItem from './FeedbackItem';

const ListWrap = styled.div``;

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  return (
    // framer-motion 애니메이션 입히기
    <ListWrap>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </ListWrap>
  );
};

export default FeedbackList;
