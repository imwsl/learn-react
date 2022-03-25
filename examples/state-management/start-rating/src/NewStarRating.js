import React, {useState} from "react";
import {FaStar} from "react-icons/fa"
import './App.css';

const createArray = length => [...Array(length)]

const Star = ({selected = false, onSelect = f => f}) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
)


//
// NewStarRating的剩余的参数全部集中在...props里面，防止用户注入有害的参数到components里面 ??
// 这会有什么问题?
function NewStarRating({style = {}, totalStars = 5, ...props}) {
    const [selectedStars, setSelectedStars] = useState(0)
    return (
        <div style={{padding: "5px", ...style}} {...props}>
         {createArray(totalStars).map((n, i) => (
             <Star 
                key={i} 
                selected={selectedStars > i}
                onClick={() => setSelectedStars(i)}
            />
          ))}
         <p>{selectedStars} of {totalStars} stars.</p>
        </div>
    )
}

export default NewStarRating;