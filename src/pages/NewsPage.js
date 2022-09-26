import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from 'react-router-dom'

const NewsPage = () => {
    // 카테고리가 선택되지 않았을 경우 기본값 'all'
    // match undefined 오류로  useParams hook 사용
    const parms = useParams() 
    const category = parms.category || 'all'

    return (
        <> 
            <Categories/>
            <NewsList category={category}/>
        </>
    );
};

export default NewsPage;