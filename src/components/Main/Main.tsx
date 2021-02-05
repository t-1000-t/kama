import React from 'react';
import styled from "./Main.module.css"
import Technologies from "./Technologies/Technologies";
import Navbar from "./Navbar/Navbar";

const Main = () => {
    return (
        <div className={styled.wrapperM}>
            <Navbar/>
        <Technologies/>
        </div>
    );
}
export default Main