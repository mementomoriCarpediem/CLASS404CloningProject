import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { PRODUCTLIST_API } from '../../config';
import styled from 'styled-components';
import ReviewSection from './ReviewSection';
import MenuAside from './MenuAside';
import Navigation from '../../Components/Navigation/Navigation';

function ProductDetail(props) {
  const [productData, setProductData] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`${PRODUCTLIST_API}/${props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data.product[0]);
      });
  };

  const {
    thumbnail,
    likeCount,
    category,
    creatorName,
    className,
    price,
    gift,
    description,
    reviews,
    reviewNumber,
  } = productData;

  return (
    <>
      <Navigation />
      <TopWrapper>
        <DetailArea>
          <div className="mainImageContainer">
            <img src={thumbnail} alt="mainImage" />

            <Link to={{ pathname: '/videoplay', state: { reviews: reviews } }}>
              <button className="preview">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/13/13021.svg?token=exp=1615166334~hmac=0516000c85c83e8f759760d3b40767d9"
                  alt="preview"
                />
                클래스 미리보기
              </button>
            </Link>
          </div>

          <nav>
            <a href="#review">후기</a>
            <a href="#description">클래스소개</a>
          </nav>
          <ReviewSqaure id="review">
            <p>
              실제 수강생들의
              <br /> 생생한 후기
            </p>
            <div className="twoColumn">
              <div className="statistic">
                <span>클래스 후기</span>
                <span>{reviewNumber}</span>
              </div>
              <div className="statistic">
                <span>수강생 만족도</span>
                <span className="satisfaction">98%</span>
              </div>
            </div>
            <ReviewSection reviews={reviews} />
          </ReviewSqaure>
          <ReviewLine>
            {reviews?.map((review) => {
              return (
                <div>
                  <div className="author">
                    <img
                      src="https://www.flaticon.com/svg/vstatic/svg/1946/1946429.svg?token=exp=1614927644~hmac=70e5850fcc6f210ad521a76ba9def55f"
                      alt="profileImg"
                    />
                    <div className="nameAndDate">
                      <span>{review.author}</span>
                      <span>2021.2.13</span>
                    </div>
                  </div>
                  <p>{review.text}</p>
                </div>
              );
            })}
          </ReviewLine>
          <button className="more">더보기</button>
          <Link to="/reviewupload">
            <button className="createReview">리뷰작성</button>
          </Link>
          <ProductDescription id="description">
            <span>
              클래스를 <br />
              소개합니다.
            </span>
            <p>{description}</p>
          </ProductDescription>
        </DetailArea>

        <MenuAside
          category={category}
          creatorName={creatorName}
          className={className}
          gift={gift}
          price={price}
          likeCount={likeCount}
        />
      </TopWrapper>
    </>
  );
}

export default withRouter(ProductDetail);

const TopWrapper = styled.section`
  display: flex;
  width: 1170px;
  margin: 0 auto;
  padding-top: 15px;
`;

const DetailArea = styled.div`
  width: 780px;
  display: flex;
  flex-direction: column;

  .mainImageContainer {
    position: relative;

    img {
      width: 778px;
      height: 584px;
    }

    .preview {
      position: absolute;
      width: 150px;
      height: 45px;
      right: 30px;
      bottom: 20px;
      border-radius: 3px;
      font-size: 15px;
      background-color: #1a1c1d;
      color: white;
      vertical-align: middle;

      &:hover {
        cursor: pointer;
      }

      img {
        width: 15px;
        height: 15px;
        margin-right: 10px;
        filter: invert(1);
      }
    }
  }

  nav {
    position: sticky;
    top: 0px;
    margin: 30px 0;
    display: flex;
    justify-content: flex-start;
    height: 50px;
    background-color: white;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};

    a {
      margin-right: 20px;
      font-size: 15px;
      font-weight: 700;
      padding-top: 20px;
      text-decoration: none;
      color: ${({ theme }) => theme.gray};

      &:hover {
        cursor: pointer;
      }

      &:focus {
        color: black;
        border-bottom: 3px solid black;
      }
    }
  }

  .more,
  .createReview {
    width: 100%;
    height: 40px;
    margin-bottom: 30px;

    &:hover {
      cursor: pointer;
      background-color: #dddde1;
    }
  }
`;

const ReviewSqaure = styled.section`
  margin-top: 20px;

  p {
    font-size: 25px;
    font-weight: 700;
  }

  .twoColumn {
    display: flex;

    .statistic {
      dispaly: flex;
      flex-direction: column;
      width: 100%;
      height: 100px;
      text-align: center;
      padding-top: 15px;

      span:first-child {
        color: gray;
        font-size: 13px;
      }

      span:last-child {
        display: block;
        font-size: 40px;
        font-weight: 700;
      }

      .satisfaction {
        border-left: 1px solid ${({ theme }) => theme.lightGray};
      }
    }
  }
`;

const ReviewLine = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .author {
    display: flex;

    img {
      width: 30px;
      height: 30px;
    }

    .nameAndDate {
      disaply: flex;
      flex-direction: column;
      height: 50px;

      span {
        display: block;
        margin-left: 15px;

        &:first-child {
          font-size: 15px;
          margin-bottom: 5px;
        }

        &:last-child {
          color: gray;
          font-size: 12px;
        }
      }
    }
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
  }
`;

const ProductDescription = styled.section`
  span {
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
  }

  p {
    margin-top: 20px;
    height: 200px;
    line-height: 30px;
  }
`;
