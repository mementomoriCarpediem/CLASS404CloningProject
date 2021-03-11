import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router";
import MyPageList from "../MyPageList/MyPageList";
import { MYPAGE_API } from "../../../../config";

function MyPageCreate({ queryString }) {
  const history = useHistory();
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    history.push(queryString);
    getMyPageData();
  }, []);

  const getMyPageData = () => {
    fetch(MYPAGE_API + queryString, {
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setProductsData(res.product);
      });
  };

  return <MyPageList products={productsData} title="내가 만든 클래스" />;
}

export default withRouter(MyPageCreate);
