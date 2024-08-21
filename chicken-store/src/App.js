/*
ChickenList path="/"

ChickenDetail.js path="/chicken-detail"

npm install react-router-dom
*/
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ChickenList from './component/ChickenList';
import ChickDetail from './component/ChickDetail';

function App () {
    return(
      <>
      <Router>
        <Routes>
          <Route path="/"    element={<ChickenList/>}/>
         <Route path="/chicken-detail/:id" element={<ChickDetail />}/>
         

        </Routes>
      </Router>
      
      
      
      </>
    )
}

export default App;