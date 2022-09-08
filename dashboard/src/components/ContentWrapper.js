import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import MovieList from './MovieList';
import Footer from './Footer';
import {Routes, Route} from "react-router-dom"
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <Routes>
                        <Route path="/" element={<ContentRowTop />} />
                        <Route path="/movies" element={<MovieList />} />
                    </Routes>
                    
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;