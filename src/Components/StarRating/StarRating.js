
 import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import './StarRating.css'
class StarRating extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 0,
            overAllRating : []
        };
    }

    onStarClick(nextValue, prevValue, name) {
        const copyOfstateRating = {... this.state.rating}
        this.setState({ rating:nextValue });
    }

   onclickCount = (val)=>{
       const ratingArray = [];
       const result = ratingArray.push(val);
       this.setState({ overAllRating:result });
   }

    render() {
        const { rating } = this.state;
    //    const avgStar = { overAllRating }.map()
        return (
            <div>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={
                    this.onStarClick.bind(this)}
                />
               
            </div>

        );
    }
}

export default StarRating;




// import React, { useState } from 'react';
// import './StarRating.css';
// import { FaStar } from 'react-icons/fa';


// const StarRating = () => {

//     const [rating, setRating] = useState(null)
//     const [hover, setHover] = useState(null)
//     return (

//         <div>
//             {[...Array(5)].map((star, index) => {
//                 const ratingValue = index + 1
//                 return (
//                     <label>
//                         <input
//                             type="radio"
//                             name="rating"
//                             value={ratingValue}
//                             onClick={() => setRating(ratingValue)}

//                         />
//                         <FaStar className="star"
//                             color={ratingValue <= (hover || rating) ? "#ffc107" : "#ere5e9"}
//                             size={25}
//                             onMouseUp={() => setHover(ratingValue)}
//                             onMouseLeave={() => setHover(null)}
//                         />
//                     </label>
                    
//                 );
//             })}
//             <div> your Rating {rating} </div> 
//         </div>
        
//     )
// }

// export default StarRating;





