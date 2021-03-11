import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RadioBtn from '../RadioBtn/RadioBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SORTINGLIST_DATA } from '../../config';

function SortingModal({ handleSortingModal, saveSorting }) {
  const [sortingData, setSortingData] = useState([]);

  useEffect(() => {
    getSorting();
  }, []);

  const getSorting = () => {
    fetch(SORTINGLIST_DATA)
      .then((res) => res.json())
      .then((res) => setSortingData(res));
  };

  const handleSorting = (e) => {
    saveSorting(e.target.value);
    handleSortingModal();
  };

  return (
    <ModalDim>
      <ModalContainer>
        <SpaceBetweenWrapper>
          <Title>정렬</Title>
          <CloseBtn onClick={handleSortingModal}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseBtn>
        </SpaceBetweenWrapper>
        <RadioBtnList>
          {sortingData.map((sorting) => (
            <RadioBtn
              key={sorting.id}
              id={sorting.id}
              value={sorting.value}
              label={sorting.name}
              onClick={handleSorting}
            />
          ))}
        </RadioBtnList>
      </ModalContainer>
    </ModalDim>
  );
}

const ModalDim = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.56);
  z-index: 20;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 480px;
  height: fit-content;
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
  width: 60px;
  height: 60px;
  top: 0;
  right: 0;
  background: none;
`;

const RadioBtnList = styled.div``;

export default SortingModal;
