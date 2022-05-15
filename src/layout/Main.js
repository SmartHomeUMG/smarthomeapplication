import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import "../App.css"

import Navigation from './Navigation';
import Home from '../pages/Home';
import Info from '../pages/Info';
import Userpanel from '../pages/Userpanel';

function Main() {

    return (
        <div className="Maincontent">
            <Navigation />
            <div>
                <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/Info" element={<Info/>}/>
                        <Route path="/Userpanel" element={<Userpanel/>}/>
                </Routes>
            </div>
        </div>
    );

}

export default Main;
