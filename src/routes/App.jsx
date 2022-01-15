import React  from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "Pages/Home";
import Kitchen from "Pages/Kitchen";
import Refrigeration from "Pages/Refrigeration";
import Electrical from "Pages/Electrical";
import Contact from "Pages/Contact";
import AirConditioner from "Pages/AirConditioner";


const App = () => {

    return <BrowserRouter>
        <Layout>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/kitchens"} element={<Kitchen/>}/>
                <Route path={"/electrical"} element={<Electrical/>}/>
                <Route path={"/refrigeration"} element={<Refrigeration/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
                <Route path={"/air-conditioner"} element={<AirConditioner/>}/>
            </Routes>
        </Layout>
    </BrowserRouter>
}

export default App;
