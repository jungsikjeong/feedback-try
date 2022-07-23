import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import FeedbackContext from '../context/FeedbackContext';

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0 40px;
`;

const Li = styled.li`
  position: relative;
  background-color: #f4f4f4;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 10px;
  text-align: center;
  font-size: 1.5rem;
  border: 1px #eee solid;
  transition: 0.3s;

  :hover {
    background: #ff6a95;
    color: #fff;
  }
`;

const Input = styled.input`
  opacity: 0;

  :checked ~ label {
    background-color: #ff6a95;
    color: #fff;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  color: #000;
`;

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    // +를 붙여주면 number이 된다.
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <Ul>
      {Array.from({ length: 10 }, (_, i) => (
        <Li key={`rating-${i + 1}`}>
          <Input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <Label htmlFor={`num${i + 1}`}>{i + 1}</Label>
        </Li>
      ))}
    </Ul>
  );
};

export default RatingSelect;
