import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navigation from '../../Components/Navigation/Navigation';

export default function VideoPlay() {
  const [playingAt, SetPlayingAt] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    window.addEventListener('scroll', infiniteScroll, true);
  }, []);

  const infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );

    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      // 댓글 추가 데이터 수신 함수
      // this.setState({
      //   offset: this.state.offset + this.state.limit,
      // });
      // this.componentDidMount();
    }
  };

  const moveTo = (e) => {
    const min = Number(e.target.innerText.split(':')[0]);
    const sec = Number(e.target.innerText.split(':')[1]);
    const totalSec = 60 * min + sec;

    SetPlayingAt(totalSec);
  };

  const handlePlayingTime = (element) => {
    if (element !== null) {
      element.currentTime = playingAt;
    }
  };

  const changeColor = (e) => {
    // 백엔드의 데이터를 받아서, 좋아요 여부를 클래스 명 추가 및 제거로 반영
  };

  return (
    <>
      <Navigation />
      <Container>
        <LeftWrapper>
          <Top>
            <p>스마트 스토어로 월 1000만원 만들기</p>
            <div className="titleOnTop">
              <span>반복과 진화의 힘</span>
              <div className="buttons">
                <div className="buttonUnit">
                  <img
                    src="https://www.flaticon.com/svg/vstatic/svg/2467/2467862.svg?token=exp=1614946914~hmac=f70e569c2b3fc54ffd538f6f48127279"
                    alt="phone"
                  />
                  <span>앱으로 보기</span>
                </div>
                <div className="buttonUnit">
                  <img
                    src="https://www.flaticon.com/svg/vstatic/svg/2223/2223615.svg?token=exp=1614946941~hmac=0dccaa0f8fa793bd3aa98f9cbb239951"
                    alt="arrow-left"
                  />
                  <span>이전 콘텐츠</span>
                </div>
                <div className="buttonUnit">
                  <span>다음 콘텐츠</span>
                  <img
                    src="https://www.flaticon.com/svg/vstatic/svg/2223/2223627.svg?token=exp=1614946989~hmac=d3940cf855d2155c9dc7da6441208ccf"
                    alt="arrow-right"
                  />
                </div>
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/61/61140.svg?token=exp=1614947108~hmac=407c40ea25a0a2669c6409b249e1542c"
                  alt="more"
                />
              </div>
            </div>
          </Top>
          <video
            src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1280_10MG.mp4"
            ref={handlePlayingTime}
            controls
          >
            Your browser does not support the video tag.
          </video>
          <ReviewTop>
            <p>
              댓글<span>405개</span>
            </p>
          </ReviewTop>
          <ReviewFilter>
            <div className="leftUnit">
              <input type="checkbox" />
              <span>내 댓글보기</span>
            </div>
            <div className="rightUnit">
              <span>최신순</span>
              <span>인기순</span>
            </div>
          </ReviewFilter>
          <Review>
            <div className="author">
              <img
                src="https://class101.net/images/default-user.png"
                alt="profileImg"
              />
              <div>
                <span>서범석</span>
                <span>2021.4.23</span>
              </div>
            </div>
            <p>감사합니다.</p>
            <p>
              <span className="like" onClick={changeColor} />
              <span>23</span>
              <span>댓글 고정</span>
            </p>
          </Review>
          <Review>
            <div className="author">
              <img
                src="https://class101.net/images/default-user.png"
                alt="profileImg"
              />
              <div>
                <span>서범석</span>
                <span>2021.4.23</span>
              </div>
            </div>
            <p>감사합니다.</p>
            <p>
              <span className="like" onClick={changeColor} />
              <span>23</span>
              <span>댓글 고정</span>
            </p>
          </Review>
          <Review>
            <div className="author">
              <img
                src="https://class101.net/images/default-user.png"
                alt="profileImg"
              />
              <div>
                <span>서범석</span>
                <span>2021.4.23</span>
              </div>
            </div>
            <p>감사합니다.</p>
            <p>
              <span className="like" onClick={changeColor} />
              <span>23</span>
              <span>댓글 고정</span>
            </p>
          </Review>
          <Review>
            <div className="author">
              <img
                src="https://class101.net/images/default-user.png"
                alt="profileImg"
              />
              <div>
                <span>서범석</span>
                <span>2021.4.23</span>
              </div>
            </div>
            <p>감사합니다.</p>
            <p>
              <span className="like" onClick={changeColor} />
              <span>23</span>
              <span>댓글 고정</span>
            </p>
          </Review>
          <Review>
            <div className="author">
              <img
                src="https://class101.net/images/default-user.png"
                alt="profileImg"
              />
              <div>
                <span>서범석</span>
                <span>2021.4.23</span>
              </div>
            </div>
            <p>감사합니다.</p>
            <p>
              <span className="like" onClick={changeColor} />
              <span>23</span>
              <span>댓글 고정</span>
            </p>
          </Review>
        </LeftWrapper>
        <Aside>
          <header>수업 노트</header>
          <div>
            <p className="title">[수업 목표]</p>
            <p>반복과 진화의 힘에 대해 알아보겠습니다.</p>
          </div>
          <div>
            <p className="title">[수업 개요]</p>
            <p>
              ﹒<span onClick={moveTo}>00:05</span> 평범한 사람이~
            </p>
            <p>
              ﹒<span onClick={moveTo}>00:10</span> 평범한 사람이~
            </p>
            <p>
              ﹒<span onClick={moveTo}>00:27</span> 평범한 사람이~
            </p>
          </div>
          <div>
            <p className="title">[다음 수업 예고]</p>
            <p>새로운 목표에 대해 이야기 해보겠습니다.</p>
          </div>
        </Aside>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  height: 200%;
`;

const LeftWrapper = styled.section`
  flex: 2.5;
  margin: 0 auto;
  padding: 40px 40px;
  overflow-y: scroll;
  height: 100vh;

  video {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;

  .titleOnTop {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;

    > span {
      font-size: 30px;
      font-weight: 700;
    }

    .buttons {
      display: flex;

      .buttonUnit {
        width: 110px;
        height: 32px;
        background-color: ${({ theme }) => theme.lightGray};
        margin-left: 8px;
        border-radius: 5px;
        padding-top: 7px;
        text-align: center;

        :hover {
          cursor: pointer;
          background-color: #dddde1;
        }

        span {
          font-size: 15px;
          font-weight: 600;
          vertical-align: middle;
        }
      }

      img {
        width: 20px;
        height: 20px;
        margin-left: 8px;
        vertical-align: middle;
      }

      > img {
        width: 35px;
        height: 35px;
        padding: 7px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.lightGray};

        :hover {
          cursor: pointer;
          background-color: #dddde1;
        }
      }
    }
  }
`;

const ReviewTop = styled.div`
  width: 100%;
  height: 60px;
  padding-top: 20px;

  p {
    font-size: 23px;
    font-weight: 700;
    padding-bottom: 15px;
    border-bottom: ${({ theme }) => theme.border};

    span {
      margin-left: 15px;
      color: gray;
      font-size: 15px;
      font-weight: 400;
    }
  }
`;

const ReviewFilter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 20px 0;
  color: gray;
  font-size: 15px;
  font-weight: 500;

  .leftUnit {
    vertical-align: middle;
    height: auto;
  }

  input {
    width: 15px;
    height: 15px;
    margin: 0;
    padding: 0;
  }

  span {
    margin: 0 0 0 10px;

    :hover {
      cursor: pointer;
    }

    &.active {
      color: ${({ theme }) => theme.orange};
    }
  }
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: ${({ theme }) => theme.border};
  padding: 20px 0;

  .author {
    display: flex;
    margin-bottom: 15px;

    div {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      margin-left: 10px;
      padding-top: 5px;

      span:last-child {
        color: gray;
        font-size: 10px;
        padding-top: 5px;
      }
    }

    img {
      width: 40px;
      height: 40px;
    }
  }

  p {
    line-height: 30px;
  }

  p:last-child {
    display: flex;
    justify-content: flex-start;
    font-size: 15px;
    color: gray;

    span {
      margin-right: 10px;
      vertical-align: middle;

      &:last-child {
        font-size: 13px;

        :hover {
          cursor: pointer;
        }
      }

      &.like {
        width: 20px;
        height: 20px;
        margin-top: 5px;
        background-image: url('https://www.flaticon.com/svg/vstatic/svg/535/535285.svg?token=exp=1615042243~hmac=3824c12d7348282fa76f7ababe78086a');
        background-size: contain;

        &:hover {
          cursor: pointer;
        }

        &.active {
          background-image: url('https://www.flaticon.com/svg/vstatic/svg/833/833472.svg?token=exp=1615043371~hmac=b23f5030fef3914ae92ecad263b7d04e');
        }
      }
    }
  }
`;

const Aside = styled.aside`
  flex: 1;
  padding: 20px;

  header {
    font-size: 20px;
    font-weight: 700;
    margin: 30px auto;
  }

  div {
    margin: 20px auto;
  }

  p.title {
    font-size: 17px;
    font-weight: 700;
  }

  p {
    line-height: 25px;

    span {
      color: skyblue;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
