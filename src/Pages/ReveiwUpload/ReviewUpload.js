import React, { useState } from 'react';
// import { REVIEWUPLOAD_API } from '../../config';
import styled from 'styled-components';
import Navigation from '../../Components/Navigation/Navigation';

export default function ReviewUpload() {
  const [imgUrl, setImgUrl] = useState('');

  const handleRemove = () => {
    setImgUrl('');
  };

  const handleAttatchment = (e) => {
    e.preventDefault();

    const img = e.target.files[0];
    const formData = new FormData();

    formData.append('attatchedImg', img);

    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   },
    // };

    // fetch(REVIEWUPLOAD_API, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   },
    //   body: formData,
    // });

    // for (const key of formData) console.log(key);

    let reader = new FileReader();

    reader.readAsDataURL(img);

    reader.onloadend = (e) => {
      const base = e.target.result;
      setImgUrl(base);
    };
  };

  return (
    <>
      <Navigation />
      <Container>
        <header>글 작성하기</header>
        <MiddleSection>
          <div>
            <img
              src="https://lh3.googleusercontent.com/a-/AOh14GgGxQ2qxqMqyjp__mgsa1TiNi23wcynZhkP2lPf2w=s96-c"
              className="profileImage"
              alt="profile"
            />
            <span>spjh2000</span>
          </div>
          <label>
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/860/860766.svg?token=exp=1615194423~hmac=e9911102ef73a21e3536c2ffcea93571"
              alt="attachment"
            />
            사진첨부
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleAttatchment}
            />
          </label>
        </MiddleSection>

        {imgUrl && (
          <div className="attatchmentContainer">
            <img src={imgUrl} className="attachment" alt="shownImage" />
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/545/545676.svg?token=exp=1615510461~hmac=2595e28208186344665a4297842c0b95"
              className="closeButton"
              onClick={handleRemove}
              alt="close"
            />
          </div>
        )}
        <textarea placeholder="글을 작성해주세요" />
        <button>저장하기</button>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  width: 640px;
  height: 80vh;
  margin: auto;
  padding: 20px;
  border-bottom: ${({ theme }) => theme.border};

  header {
    font-size: 25px;
    font-weight: 700;
    margin: 20px 0;
  }

  textarea {
    width: 100%;
    height: 300px;
    padding: 20px;
  }

  button {
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: -70px;
    left: 0px;
    color: white;
    background-color: ${({ theme }) => theme.orange};
  }

  .attatchmentContainer {
    position: relative;
    max-height: 350px;
    overflow: hidden;
    vertical-align: middle;

    .attachment {
      max-height: 300px;
    }

    .closeButton {
      position: absolute;
      width: 20px;
      height: 20px;
      right: 0;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const MiddleSection = styled.section`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;

  .profileImage {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    border-radius: 50%;
    vertical-align: middle;
  }

  span {
    font-size: 15px;
  }

  label {
    display: flex;
    width: 100px;
    height: 40px;
    border-radius: 3px;
    background-color: #f8f8f9;
    padding: 10px 0 0 5px;

    &:hover {
      cursor: pointer;
    }

    input {
      width: 0;
      height: 0;
    }

    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
`;
