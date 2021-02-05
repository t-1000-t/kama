import React from 'react';
import styled from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styled.wrapperN}>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Settings</div>
        </div>
    );
}
export default Navbar