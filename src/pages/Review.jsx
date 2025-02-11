import useReviewContext from "../contexts/ReviewContext";

export default function Review() {
  const { reviewItems, toggleReviewItem } = useReviewContext();

  return (
    <div className="app">
      <h1> to review </h1>
      <p> isReviewed: {reviewItems.filter((rI) => rI.isReviewed).length} </p>
      <ul>
        {reviewItems.map((reviewItem) => (
          <li
            key={reviewItem.url}
            style={{
              textDecoration: reviewItem.isReviewed ? "line-through" : "none",
            }}
            onClick={() => toggleReviewItem(reviewItem.url)}
          >
            {reviewItem.url}
          </li>
        ))}
      </ul>
    </div>
  );
}
