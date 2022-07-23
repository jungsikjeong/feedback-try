import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import Card from './common/Card';
import Button from './common/Button';
import RatingSelect from './RatingSelect';

import FeedbackContext from '../context/FeedbackContext';

const Form = styled.form`
  h2 {
    color: #000;
    text-align: center;
    font-weight: 600;
    font-size: 1.3rem;
    margin: 0 0 15px 0;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  padding: 8px 10px;
  border-radius: 8px;
`;

const Input = styled.input`
  flex-grow: 2;
  border: none;
  font-size: 16px;
  :focus {
    outline: none;
  }
`;

const MessageWrap = styled.div`
  color: #ff6a95;
  padding-top: 10px;
  text-align: center;
`;

const FeedbackForm = () => {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const { addFeedback, updateFeedback, feedbackEdit } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText('');
    }
  };

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('텍스트는 10자 이상이어야 합니다.');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  return (
    <>
      <Card>
        <Form onSubmit={handleSubmit}>
          <h2>귀하의 서비스를 어떻게 평가 하시겠습니까?</h2>

          <RatingSelect select={(rating) => setRating(rating)} />

          <InputWrapper>
            <Input
              type='text'
              onChange={handleTextChange}
              value={text}
              placeholder='리뷰를 작성해 주세요'
            />
            <Button type='submit' disabled={btnDisabled}>
              보내기
            </Button>
          </InputWrapper>

          {message && <MessageWrap>{message}</MessageWrap>}
        </Form>
      </Card>
    </>
  );
};

export default FeedbackForm;
