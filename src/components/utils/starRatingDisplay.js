import React from "react";

const StarRatingDisplay = ({rating})=>{

    const filledIcon = "★";
    const unfilledIcon = "☆";
    const totalStars = 5;
    let filledStars = [];
    if(rating<=totalStars){
        for (let i = 0; i < rating; i++) {
            filledStars.push(filledIcon);
        }
        for (let i = 0; i < (totalStars-rating); i++) {
            filledStars.push(unfilledIcon);
        }
    }
    

    return(
        <div className='star-rating-display'>
            {filledStars.map((star,i)=><span key={i} className='star'>{star}</span>)}
        </div>
    )

}

export default StarRatingDisplay;

