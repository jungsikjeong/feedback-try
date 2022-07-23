import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaTimes, FaEdit } from 'react-icons/fa';

import Card from './common/Card';
import FeedbackContext from '../context/FeedbackContext';

const RatingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  left: -10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 10px;
  background-color: #ff6a95;
  font-size: 1.3rem;
  border: 1px #eee solid;
  transition: 0.3s;
`;

const TextWrap = styled.div``;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  background: none;
  border: none;
`;

const EditBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 40px;
  cursor: pointer;
  background: none;
  border: none;
`;

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={true}>
      <RatingWrap>{item.rating}</RatingWrap>

      <CloseBtn onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple' />
      </CloseBtn>
      <EditBtn>
        <FaEdit onClick={() => editFeedback(item)} color='purple' />
      </EditBtn>

      <TextWrap>{item.text}</TextWrap>
    </Card>
  );
};

FeedbackItem.prototype = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
