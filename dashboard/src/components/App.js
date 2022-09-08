import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      	<div id="wrapper">
          <SideBar />
          <ContentWrapper />
        </div>
    </BrowserRouter>
  );
}

export default App;
