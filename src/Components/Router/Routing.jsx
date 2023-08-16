import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Error from './Error';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>} >
                    <Route index element={<Home/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="*" element={<Error/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;