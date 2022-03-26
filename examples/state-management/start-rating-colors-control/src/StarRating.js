import React from "react";
import {FaStar} from "react-icons/fa"
import './App.css';

function StarRating() {
    return(
        <div className="App">
            <FaStar color="red"/>
            <FaStar color="red"/>
            <FaStar color="red"/>
            <FaStar color="red"/>
            <FaStar color="red"/>
        </div>
    )
}

export default StarRating;