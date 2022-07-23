import React, { createContext, useState } from 'react';
import { v4 as uuid_v4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: '11111111111111111111111111',
    },
    {
      id: 2,
      rating: 10,
      text: '222222222222222222222222222222222222212',
    },
    {
      id: 3,
      rating: 10,
      text: '이빨이 아픈건지 잇몸이 아픈건지 잘 모르겠다',
    },
    {
      id: 4,
      rating: 10,
      text: '이빨이 아픈건지 잇몸이 아픈건지 잘 모르겠다',
    },
    {
      id: 5,
      rating: 5,
      text: '5점 5점',
    },
    {
      id: 6,
      rating: 1,
      text: '오른쪽 어금니가 아파요 정확히는 잇몸이 아프다고나할까',
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid_v4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  // 이해가 안가요,, 혹시 덮어쓰기가 되는건가?!!!!!!
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
