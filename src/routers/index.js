import React from 'react';
import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import User from "../pages/user";

const AppRouter = () => {
    return (
        <Routes>
            <Route  path='/' element={<Home />} />
            <Route  path='/:userName' element={<User />}/>
        </Routes>
    );
};

export default AppRouter;