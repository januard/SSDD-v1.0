import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Appbar from '../components/Appbar';
import Brand from '../components/Brand';
import SlideBar from '../components/SlideBar';

function Index() {
    return (
        <Router>
            <div className="wrapper">
                <div className="side-navigation">
                    <Brand/>
                    <SlideBar/>
                </div>
                <div className="main">
                    <Appbar/>
                    <Route path="/cod/protective.services">
                        <div>
                            hello world
                        </div>
                    </Route>
                </div>
            </div>
        </Router>
    )
}

export default Index
