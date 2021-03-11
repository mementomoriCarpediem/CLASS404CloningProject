import React from 'react';
import styled from 'styled-components';

export default function MenuAside({
  category,
  creatorName,
  className,
  gift,
  price,
  likeCount,
}) {
  return (
    <Container>
      <div className="basicInfo">
        <p>
          {category}﹒{creatorName}
        </p>
        <h1>{className}</h1>
        <p className="tag">
          {gift && <span>선물하기</span>} <span>바로 수강 가능</span>
        </p>
        <p className="price">{Number(price).toLocaleString()}원</p>
      </div>
      <AdditionalInfo>
        <div>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/1077/1077046.svg?token=exp=1614919553~hmac=b150821a2c051dedcb807b6bddf02f42"
            alt="video"
          />
          <span>콘텐츠 이용권</span>
        </div>
        <div>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/747/747376.svg?token=exp=1614919704~hmac=3233481c99b0420122e75b539993fc32"
            alt="begginer"
          />
          <span>입문자 대상</span>
        </div>
        <div>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/4021/4021559.svg?token=exp=1615445685~hmac=1688d9676c5874d3bd310ef730d3aa3f"
            alt="satisfaction"
          />
          <span>강의 만족도 98%</span>
        </div>
      </AdditionalInfo>

      <div className="buttons">
        <Button>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/1077/1077035.svg?token=exp=1614863765~hmac=391d9d386324afe908f26a504aabb667"
            alt="heart"
          />
          <span>{likeCount}</span>
        </Button>
        <Button>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/3580/3580382.svg?token=exp=1614863808~hmac=72c78c519a92311a6dd7578548b295c2"
            alt="share"
          />
          <span>공유하기</span>
        </Button>
        <Button>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/3037/3037049.svg?token=exp=1614863856~hmac=cbe073abf7153b6422f04dde6e65f469"
            alt="gift"
          />
          <span>선물하기</span>
        </Button>
      </div>
      <button className="classApply">클래스 신청하기</button>
    </Container>
  );
}

const Container = styled.aside`
  position: sticky;
  top: 0px;
  width: 370px;
  height: 450px;
  padding: 20px;
  margin: 0 10px;
  border: 2px solid ${({ theme }) => theme.lightGray};

  .basicInfo {
    p:first-child {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    h1 {
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
      margin-bottom: 10px;
    }

    .tag {
      font-size: 11px;
      font-weight: 600;

      span {
        height: 30px;
        background-color: ${({ theme }) => theme.lightGray};
        border-radius: 5px;
        margin-right: 5px;
        padding: 5px 5px;
        color: gray;

        &:first-child {
          color: red;
        }
      }
    }

    .price {
      text-align: right;
      font-size: 20px;
      font-weight: 700;
    }

    .buttons {
      display: flex;
      width: 100%;
    }
  }

  .classApply {
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.orange};
    border-radius: 3px;
    color: white;
    font-size: 18px;
    font-weight: 600;
  }
`;

const Button = styled.button`
  margin: 20px 7px;
  border-radius: 3px;
  width: 94px;
  padding: 8px 5px;

  &:hover {
    background-color: #dddde1;
  }

  img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    margin-left: 5px;
  }
`;

const AdditionalInfo = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 20px 0 0 0;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  font-size: 15px;
  font-weight: 600;

  div {
    width: 50%;
    height: 30px;
    margin-bottom: 10px;
  }

  img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 10px;
  }
`;
