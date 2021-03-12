import React, { Component } from 'react';
import { PRODUCTLIST_API } from '../../config';
import './CreatorApply.scss';

class CreatorApply extends Component {
  constructor() {
    super();
    this.state = {
      brand: '1',
      category: '1',
      detail_category: '',
      level: '1',
      thumbnail: null,
      title: '',
      image1: null,
      image2: null,
      image3: null,
      description: '',
      price: '',
      gender: 'women',
      age: '10대',
      selectedFile: null,
      imagePreview: null,
    };
  }

  handleValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  clickSubmit = () => {
    const {
      brand,
      category,
      detail_category,
      level,
      thumbnail,
      title,
      image1,
      image2,
      image3,
      description,
      price,
      gender,
      age,
      selectedFile,
    } = this.state;

    const formData = new FormData();

    formData.append('brand', brand);
    formData.append('category', category);
    formData.append('detailCategory', detail_category);
    formData.append('level', level);
    formData.append('thumbnail', selectedFile);
    formData.append('title', title);
    formData.append('image1', selectedFile);
    formData.append('image2', selectedFile);
    formData.append('image3', selectedFile);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('gender', gender);
    formData.append('age', age);

    for (var key of formData.values()) {
      console.log(key);
    }
    this.gotoMain(formData);
  };

  gotoMain = (formData) => {
    // for (const keyValue of formData) console.log(keyValue);
    fetch(PRODUCTLIST_API, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'SUCCESS') {
          alert('크리에이터 어플라이 완료.');
          this.props.history.push('/');
        } else {
          alert('다시 확인해주세요');
        }
      });
  };

  handleFileInput = (evt) => {
    let reader = new FileReader();
    let previewUrl = reader.readAsDataURL(evt.target.files[0]);

    reader.onloadend = function (e) {
      this.setState({
        selectedFile: evt.target.files[0],
        imagePreview: reader.result,
      });
    }.bind(this);
  };

  render() {
    console.log(this.state);
    const { handleValue, handleFileInput } = this;
    const { brand } = this.state;
    return (
      <div className="CreatorApply">
        <nav>
          <div className="survey">
            <img src="/images/productCreateLogo.png" alt="logo" />
            수요조사 시작하기
          </div>
        </nav>
        <div className="content_container">
          <div className="left_content">
            <div>
              <span>0</span> 기본정보
            </div>
            <div>
              <span>1</span> 제목 및 커버
            </div>
            <div>
              <span>2</span> 소개
            </div>
          </div>
          <div className="right_content">
            <section className="basic_info">
              <div className="question">
                간단하게 어떤 클래스인지 알려주세요
              </div>
              <p>
                언젠가 이런 걸 가르쳐봐야지 생각해본 적이 있으신가요? 간단히
                크리에이터님이 <br />
                알려 줄 수 있는 카테고리를 설정해봐요. 모든 수정 사항은 즉시
                저장되니 안심해 주세요.
              </p>
              <div className="select">
                <label>
                  브랜드
                  <select className="brand" name="brand" onChange={handleValue}>
                    <option value="1">
                      크리에이티브(미술, 음악, 요리 등 취미 클래스를 만들고
                      싶어요)
                    </option>
                    <option value="2">
                      커리어(직무,창업, 자기계발 등 커리어 향상을 위한 클래스를
                      만들고 싶어요)
                    </option>
                    <option value="3">
                      머니 (부업, 창업, 재태크 등 수익 활동에 대한 클래스를
                      만들고 싶어요)
                    </option>
                  </select>
                </label>
              </div>
              <div className="select">
                <label>
                  카테고리
                  <select
                    className="category"
                    name="category"
                    onChange={handleValue}
                  >
                    {brand === '1' && (
                      <>
                        <option value="1">공예</option>
                        <option value="2">디지털 드로잉</option>
                        <option value="3">라이프 스타일</option>
                        <option value="4">미술</option>
                        <option value="5">사진/영상</option>
                        <option value="6">어학/외국어</option>
                        <option value="7">요리/음료</option>
                        <option value="8">운동</option>
                        <option value="8">음악</option>
                        <option value="8">키즈</option>
                      </>
                    )}
                    {brand === '2' && (
                      <>
                        <option value="9">글쓰기/컨텐츠</option>
                        <option value="10">데이터/개발</option>
                        <option value="11">비즈니스/생산성</option>
                        <option value="12">영상/디자인</option>
                        <option value="13">커리어/기타</option>
                      </>
                    )}
                    {brand === '3' && (
                      <>
                        <option value="14">SNS/콘텐츠</option>
                        <option value="15">마인드/자기계발</option>
                        <option value="16">부동산/주식/재테크</option>
                        <option value="17">온라인쇼핑몰</option>
                        <option value="18">창업</option>
                      </>
                    )}
                  </select>
                </label>
              </div>
              <div className="detail_cate">
                <label>
                  세부 카테고리
                  <div className="example">
                    예를 들어, 가죽공예, 어반 스케치, 딥펜 캘리그라피, 다이어리
                    꾸미기, 가계부 작성, 색연필 인물화, 네이버 스토어 운영, 이런
                    식으로요. 더 자세한 내용을 보고 싶다면,
                    <span>기본 정보 작성 가이드</span>를 확인해 주세요.
                  </div>
                  <input
                    type="text"
                    placeholder="예시) 가죽공예, 어반 스케치, 딥펜 캘리그라피, 다이어리 꾸미기, 가계부 작성, 색연필 인물화, "
                    name="detailCategory"
                    onChange={handleValue}
                  />
                </label>
              </div>
              <div className="levels">
                <label>
                  난이도
                  <select className="level" name="level" onChange={handleValue}>
                    <option
                      className="placeholder"
                      value=""
                      hidden=""
                      disabled=""
                    >
                      어떤 수강생에게 맞는 난이도인지 선택해주세요.
                    </option>
                    <option value="입문자">입문자</option>
                    <option value="초급자">초급자</option>
                    <option value="중급자">중급자</option>
                    <option value="준전문가">준전문가</option>
                    <option value="전문가">전문가</option>
                  </select>
                </label>
              </div>
            </section>
            <section className="title_cover">
              <header>
                <div>클래스의 컨셉이 잘 드러난 제목과 이미지를 보여주세요 </div>
              </header>
              <p>
                감성적이면서도 클래스를 잘 표현하는 제목과 이미지를 등록해
                주세요.
              </p>
              <div className="thumbnail_image">
                <div className="image">
                  <label>썸네일 이미지</label>
                  <div className="image_box">
                    <input
                      id="imgFile"
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      name="thumbnail"
                      onChange={handleFileInput}
                      required
                      multiple
                    />
                    {this.state.imagePreview && (
                      <img src={this.state.imagePreview} alt="asdf" />
                    )}
                  </div>
                </div>
                <div className="class_name">
                  <label>클래스 제목</label>
                  <input
                    type="text"
                    name="title"
                    onChange={handleValue}
                    placeholder="컨셉이 잘 드러나는 클래스 네임을 지어주세요"
                  />
                  <div className="guideline">
                    <p>썸네일 이미지가 어디에 사용되나요?</p>
                    <div>
                      썸네일 이미지는 아래와 같이 홈페이지의 메인, 수요 조사
                      메인 페이지에서 보이는 이미지예요. 커버 이미지와 다르게
                      세로형이 아닌 가로형 이미지에 최적화돼있습니다.
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <p>상세페이지 이미지 </p>
            <section className="detail_images">
              <div className="detail_image" name="image1">
                <input
                  id="imgFile"
                  name="image1"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleFileInput}
                  required
                  multiple
                />
                {/* <img src={this.state.imagePreview} alt="asdf" /> */}
              </div>
              <div className="detail_image" name="image2">
                <input
                  id="imgFile"
                  name="image2"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleFileInput}
                  required
                  multiple
                />
                {/* <img src={this.state.imagePreview} alt="asdf" /> */}
              </div>
              <div className="detail_image" name="image3">
                <input
                  id="imgFile"
                  name="image3"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleFileInput}
                  required
                  multiple
                />
                {/* <img src={this.state.imagePreview} alt="asdf" /> */}
              </div>
            </section>
            <div className="product_detail" name="description">
              <p>상세 페이지 설명 </p>
              <input
                name="description"
                className="detail"
                type="textarea"
                onChange={handleValue}
                alt="text"
              />
              <p>가격 </p>
              <input
                className="price"
                name="price"
                type="number"
                onChange={handleValue}
                alt="price"
              />
            </div>
            <section className="information">
              <div className="creator_info">
                <p>소개: 크리에이터의 기본 정보를 알려주세요</p>
                <div className="select">
                  <label for="gender">
                    성별:
                    <select
                      className="gender"
                      name="gender"
                      onChange={handleValue}
                    >
                      <option value="women">여자</option>
                      <option value="men">남자</option>
                      <option value="genderless">성별무관</option>
                    </select>
                  </label>
                </div>
                <div className="select">
                  <label for="age">
                    나이:
                    <select className="age" name="age" onChange={handleValue}>
                      <option value="10대">10대</option>
                      <option value="20대">20대</option>
                      <option value="30대">30대</option>
                      <option value="40대">40대</option>
                      <option value="50 이상">50 이상</option>
                    </select>
                  </label>
                </div>
              </div>
            </section>
            <button type="btn" onClick={this.clickSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatorApply;
