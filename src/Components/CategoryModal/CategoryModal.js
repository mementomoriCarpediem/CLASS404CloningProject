import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CATEGORYLIST_DATA } from '../../config';

function CategoryModal({
  handleCategoryModal,
  checkedCategory,
  setCheckedCategory,
  saveCategory,
  clearCategory,
}) {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    fetch(CATEGORYLIST_DATA)
      .then((res) => res.json())
      .then((res) => setCategoryData(res));
  };

  const handleCategory = (e) => {
    if (checkedCategory.includes(e.target.value)) {
      checkedCategory.splice(checkedCategory.indexOf(e.target.value), 1);
    } else {
      setCheckedCategory([...checkedCategory, e.target.value]);
    }
  };

  return (
    <ModalDim>
      <ModalContainer>
        <SpaceBetweenWrapper>
          <Title>카테고리 설정</Title>
          <CloseBtn onClick={() => handleCategoryModal()}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseBtn>
        </SpaceBetweenWrapper>
        <CheckboxList>
          {categoryData.map((category) => (
            <Checkbox
              key={category.id}
              id={category.id}
              value={category.id}
              label={category.name}
              onChange={handleCategory}
            />
          ))}
        </CheckboxList>
        <ButtonWrapper>
          <Button name="초기화" onClick={() => clearCategory()} />
          <Button
            name="저장하기"
            onClick={() => saveCategory(checkedCategory)}
          />
        </ButtonWrapper>
      </ModalContainer>
    </ModalDim>
  );
}

const ModalDim = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.56);
  width: 100%;
  left: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

const ModalContainer = styled.div`
  position: relative;
  height: fit-content;
  width: 480px;
  padding: 30px 30px;
  background: #fff;
  border-radius: 8px;
`;

const SpaceBetweenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  margin: 10px 0 20px;
  font-size: 20px;
  font-weight: 600;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  width: 60px;
  height: 60px;
`;

const CheckboxList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ButtonWrapper = styled(SpaceBetweenWrapper)`
  margin-top: 20px;
`;

export default CategoryModal;
