import React from 'react';
import { Route, Routes } from 'react-router-dom'
import NewsPage from './pages/NewsPage';

const App = () => {

  // // 기본 카테고리 state 선언
  // const [category, setCategory] = useState('all')
  // // 콜백으로 사용 할 카테고리 함수
  // const onSelect = useCallback(Category => setCategory(Category), [])

  return (
    <Routes>
      <Route path={"/"} element={<NewsPage/>}/>
      <Route path={"/:category"} element={<NewsPage/>}/>;
    </Routes>
  )
};

export default App