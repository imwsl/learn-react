import React from "react";
import {FaStar} from "react-icons/fa"
import './App.css';

const createArray = length => [...Array(length)]

const Star = ({selected = false}) => (
    <FaStar color={selected ? "red" : "grey"}/>
)

function NewStarRating({totalStars = 5}) {
    return createArray(totalStars).map((n, i) => (<Star key={i}/>))
}

export default NewStarRating;