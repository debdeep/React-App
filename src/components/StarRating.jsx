import { STAR_RATING } from "./../utils/constants";
const StarRating = () => {
    return (
        <>
            <h4>{STAR_RATING.HEADING}</h4>
            <div className="star-rating">
                {[1, 2, 3, 4, 5].map((rating) => (
                    <label key={rating}>
                        <input
                            type="radio"
                            name="rating"
                            value={rating}
                            aria-label={`${rating} star`}
                        />
                        <span>&#9733;</span>
                    </label>
                ))}
            </div>
        </>
    );
}

export default StarRating;