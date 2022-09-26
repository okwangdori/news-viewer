import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem"
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsItemBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({category} ) => {
    const [loading, response, error] = usePromise(() => {
        // props로 넘어온 state로 
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=afda249a1ccb482fa0944d12a295021b`,
    )       
    }, [category])


    // 대기 중
    if (loading) {
        return <NewsItemBlock>대기 중입니다...</NewsItemBlock>
    }
    // articles 값이 설정 안될경우 (null 오류방지)
    if (!response) {
        return null;
    }
    // 에러가 발생했을 떄
    if (error) {
        return <NewsItemBlock>에러 발생...</NewsItemBlock>;
    }

    const { articles } = response.data;
    return (
        <NewsItemBlock>
            {articles.map(v =>  (
                <NewsItem key={v.url} article={v} />
            ))}
        </NewsItemBlock>
    );
};

export default React.memo(NewsList);