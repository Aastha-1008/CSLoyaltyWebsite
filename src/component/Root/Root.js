import React from "react";
import Home from '../Home/Home';
import { Routes,Route } from 'react-router-dom';

const Root = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
}

export default Root;