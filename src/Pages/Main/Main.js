import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from '../../Components/Navigation/Navigation';
import ProductsList from '../../Components/ProductList/ProductList';
import Filter from '../../Components/Filter/Filter';
import CategoryModal from '../../Components/CategoryModal/CategoryModal';
import SortingModal from '../../Components/SortingModal/SortingModal';

import { PRODUCTLIST_DATA, PRODUCTLIST_API } from '../../config';

function Main(props) {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');
  const [products, setProducts] = useState([]);
  const [isCategoryModalOn, setIsCategoryModalOn] = useState(false);
  const [isSortingModalOn, setIsSortingModalOn] = useState(false);
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [queryStringArr, setQueryStringArr] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [profileImage, setProfileImage] = useState('');

  // console.log(props.location.state.isLogin);

  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts();
    // setIsLogin(props.location.state.isLogin);
    // setProfileImage(props.location.state.profileImage);
  }, []);

  const getProducts = () => {
    fetch(
      PRODUCTLIST_API,
      localStorage.getItem('access_token') && {
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
      }
    )
      .then((res) => res.json())
      .then((res) => setProducts(res.product));
  };

  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  const handleCategoryModal = () => {
    setIsCategoryModalOn(!isCategoryModalOn);
  };

  const handleSortingModal = () => {
    setIsSortingModalOn(!isSortingModalOn);
  };

  const saveCategory = (nowValue, isChecked) => {
    // console.log(nowValue, isChecked);

    if (queryStringArr.length > 3) {
      setQueryStringArr([]);
    }

    if (isChecked) {
      setCheckedCategory([...checkedCategory, nowValue]);
    } else {
      setCheckedCategory((checkedCategory) =>
        checkedCategory.splice(checkedCategory.indexOf(nowValue.toString()))
      );
    }
  };

  const makeCategoryQuery = () => {
    handleCategoryModal();

    const changedCategory = checkedCategory.map((each) => `category=${each}`);

    setQueryStringArr((queryStringArr) => [
      ...queryStringArr,
      changedCategory.join('&'),
    ]);

    // queryStringArr.join('&') && history.push(`?${queryStringArr.join('&')}`);
    // console.log(history);

    // fetch(
    //   PRODUCTLIST_API + history.location.search
    //   //   , {
    //   //   headers: { Authorization: localStorage.getItem("access_token") },
    //   // }
    // )
    //   .then((res) => res.json())
    //   .then((res) => setProducts(res.product));
  };

  const saveSorting = (checkedSorting) => {
    // console.log(checkedSorting);
    if (queryStringArr.length > 3) {
      setQueryStringArr([]);
    }

    const changedSorting = `sorting=${checkedSorting}`;

    if (queryStringArr.some((each) => each.includes('sorting'))) {
      const indexOfsort = queryStringArr.findIndex((each) => {
        each.includes('sort');
      });

      setQueryStringArr((queryStringArr) =>
        queryStringArr.splice(indexOfsort, 1, changedSorting)
      );

      // console.log(indexOfsort, changedSorting);
    } else {
      setQueryStringArr((queryStringArr) => [
        ...queryStringArr,
        changedSorting,
      ]);
    }

    // history.push(`${history.location.search}?${queryStringArr.join('&')}`);
    // fetch(PRODUCTLIST_API + queryString, {
    //   headers: { Authorization: localStorage.getItem("access_token") },
    // })
    //   .then((res) => res.json())
    //   .then((res) => setProducts(res.product));
  };
  console.log('queryStirngArr ==>', queryStringArr.join('&'));
  console.log('checkedCategory ==>', checkedCategory);

  const filterProducts = products.filter(
    (product) =>
      product.title.includes(keyword) ||
      product.category.includes(keyword) ||
      product.userName.includes(keyword)
  );

  return (
    <MainContainer>
      {isCategoryModalOn && (
        <CategoryModal
          handleCategoryModal={handleCategoryModal}
          saveCategory={saveCategory}
          setIsCategoryModalOn={setIsCategoryModalOn}
          makeCategoryQuery={makeCategoryQuery}
          checkedCategory={checkedCategory}
        />
      )}
      {isSortingModalOn && (
        <SortingModal
          handleSortingModal={handleSortingModal}
          saveSorting={saveSorting}
          // checkedSorting={checkedSorting}
          // setCheckedSorting={setCheckedSorting}
        />
      )}
      <Navigation />
      <MainWrapper>
        <SearchTitle>찾으시는 취미가 있으신가요?</SearchTitle>
        <Search>
          <SearchInput
            type="search"
            placeholder="ex) 미술, 개발, 부동산 "
            onChange={handleSearch}
          />
          <SearchBtn
            src="https://www.flaticon.com/svg/vstatic/svg/622/622669.svg?token=exp=1615437499~hmac=205a7de5c85a4731e97315fd5e947469"
            alt="search"
          />
        </Search>
        <FilterList>
          <Filter onClick={handleCategoryModal} name="카테고리 설정" />
          <Filter onClick={handleSortingModal} name="정렬" />
        </FilterList>
        <ProductsList products={filterProducts} />
      </MainWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: relative;
`;

const MainWrapper = styled.main`
  width: 1176px;
  margin: auto;
`;

const SearchTitle = styled.p`
  padding: 80px 0 50px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 400px;
  margin: auto;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 48px 0 24px;
  background: ${(props) => props.theme.lightGray};
  border: none;
  border-radius: 24px;

  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
`;

const SearchBtn = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  right: 20px;
  cursor: pointer;
`;

const FilterList = styled.ul`
  display: flex;
  margin: 32px 0 24px;
`;

export default Main;
