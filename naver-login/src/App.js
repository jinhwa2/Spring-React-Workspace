import logo from './logo.svg';
import './App.css';
import Login from './Login';
import UserInfo from './UserInfo';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// html파일이 1개 밖에 없는 React에서는
// Router를 이용해서 각 js파일의 경로를 설정
// BrowserRouter Router :웹에 전체적인 경로 모음
// Switch               :경로들
// Route                :경로
function App() {
  return (
   <Router>
     <Routes >
      <Route path='/' element={<Login  />} />
      <Route path='/userinfo' element={<UserInfo />} />
     </Routes >

   </Router>
  );
}

export default App;
