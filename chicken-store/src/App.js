/*
ChickenList path="/"

ChickenDetail.js path="/chicken-detail"

npm install react-router-dom
*/
import React,{useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ChickenList from './component/ChickenList';
import ChickDetail from './component/ChickDetail';
import MainRouter from './MainRouter';
import SearchResult from './component/SearchResult';


function App () {
  
    return(
      <>
      <Router>

      
        <Routes>
          <Route path="/"    element={<MainRouter/>}/>
          {/*Routes 안에는 Route로 설정된 태그만 들어올 수 있음<MainRouter />*/}
         <Route path="/chicken-detail/:id" element={<ChickDetail />}/>
         <Route path="/search" element={<SearchResult />} />
         <Route path='/chickenList' element={<hickenList />} />

        </Routes>
      </Router>
      
      
      
      </>
    )
}

export default App;