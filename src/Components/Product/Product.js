import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { PRODUCTLIST_API } from '../../config';
import theme from '../../Styles/theme';

function Product({
  id,
  thumbnail,
  likeCount,
  like,
  category,
  userName,
  title,
  price,
  gift,
  reviewNumber,
}) {
  const history = useHistory();
  const [isLikeCliked, setIsLikeCliked] = useState(like);
  const [likeNum, setLikeNum] = useState(likeCount);

  const handleLike = () => {
    if (
      localStorage.getItem('access_token') ||
      localStorage.getItem('kakao_token')
    ) {
      fetch(`${PRODUCTLIST_API}/${id}/like`, {
        method: 'POST',
        headers: {
          Authorization:
            localStorage.getItem('access_token') ||
            localStorage.getItem('kakao_token'),
        },
      }).then((res) => res.json());

      if (isLikeCliked === false) {
        alert('찜한 목록에 추가되었습니다!');
        setLikeNum(likeCount + 1);
      } else {
        alert('찜한 목록에서 제거되었습니다.');
        setLikeNum(likeCount);
      }
      setIsLikeCliked(!isLikeCliked);
    } else {
      alert('로그인한 유저만 찜하기가 가능합니다!');
    }
  };

  return (
    <ProductContainer id={id}>
      <Thumbnail onClick={() => history.push(`/product/${id}`)}>
        <img src={thumbnail} alt="thumbnail" />
      </Thumbnail>
      <Badge>5만원 쿠폰</Badge>
      <LikeBtn onClick={handleLike}>
        {isLikeCliked ? (
          <FontAwesomeIcon icon={faHeart} color={theme.red} />
        ) : (
          <FontAwesomeIcon icon={farHeart} color="white" />
        )}
      </LikeBtn>
      <div onClick={() => history.push(`/product/detail/${id}`)}>
        <ProductInfo>
          <span>{category}</span>
          <span>∙</span>
          <span>{userName}</span>
        </ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        <Like>
          <FontAwesomeIcon icon={faHeart} color={theme.gray} size="xs" />
          <span className="count">{likeNum}</span>
          <span className="count">리뷰수: {reviewNumber}</span>
        </Like>
        <Line />
        <Price>{Math.floor(price).toLocaleString()}원</Price>
        <Tags>
          {gift && <span className="gift">선물하기</span>}
          <span>바로 수강 가능</span>
        </Tags>
      </div>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 276px;
  margin: 0 12px 40px;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  width: 276px;
  height: 207px;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 276px;
    height: 207px;
    object-fit: cover;
    transition: transform 0.45s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Badge = styled.span`
  position: absolute;
  left: 14px;
  top: 14px;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  padding: 7px 7px 6px;
  border-radius: 2px;
  background: ${(props) => props.theme.red};
`;

const LikeBtn = styled.button`
  position: absolute;
  background: none;
  font-size: 20px;
  right: 12px;
  top: 14px;
  z-index: 10;
`;

const ProductInfo = styled.p`
  margin: 12px 0 8px;
  font-size: 11px;
  font-weight: 600;
`;

const ProductTitle = styled.p`
  height: 40px;
  font-size: 14px;
  line-height: 1.4;
  overflow: hidden;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;

  .count {
    margin-left: 4px;
    color: ${(props) => props.theme.gray};
    font-size: 12px;
  }
`;

const Line = styled.div`
  margin: 12px 0;
  border-top: ${(props) => props.theme.border};
`;

const Price = styled.p`
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 700;
`;

const Tags = styled.div`
  span {
    margin-right: 5px;
    padding: 5px;
    color: ${(props) => props.theme.gray};
    background: ${(props) => props.theme.lightGray};
    border-radius: 2px;
    font-size: 10px;
    font-weight: 700;
  }

  .gift {
    color: ${(props) => props.theme.red};
  }
`;

export default Product;
