import {useState} from 'react';
import {Rating} from 'react-simple-star-rating';


export default function StarRating() {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate)
    };

    return (
        <div className='Stars'>
            <Rating onClick={handleRating} ratingValue={rating}/>
        </div>
    )
}