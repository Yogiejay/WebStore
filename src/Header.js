import React from "react";
import "./Header.css";

function Header() {
    return ( <
        div className = "header" >
        <
        img className = "header__logo"
        src = "https://economictimes.indiatimes.com/thumb/msid-59738992,width-640,height-480,resizemode-75,imgsize-25499/amazon.jpg" /
        >
        <
        div className = "header__search" >
        <
        input className = "header__searchInput"
        type = "text" / >
        <
        /div>{" "} <
        div className = "header__nav" >
        <
        div className = "header__option" > < /div>{" "} <
        div className = "header__option" > < /div>{" "} <
        div className = "header__option" > < /div>{" "} < /
        div > { " " } <
        /div>
    );
}

export default Header;