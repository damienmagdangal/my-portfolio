type Proficiency = {
  value: number;
};

const RatingComponent = (props: Proficiency) => {
  const { value } = props;
  if (value === 1) {
    return (
      <div className="rating">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-100"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-100"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-100"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-100"
          disabled
        />
      </div>
    );
  } else if (value === 2) {
    return (
      <div className="rating">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-100"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-100"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-100"
          disabled
        />
      </div>
    );
  } else if (value === 3) {
    return (
      <div className="rating">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-100"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-100"
          disabled
        />
      </div>
    );
  } else if (value === 4) {
    return (
      <div className="rating">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-100"
          disabled
        />
      </div>
    );
  } else if (value === 5) {
    return (
      <div className="rating">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
      </div>
    );
  }
};

export default RatingComponent;
