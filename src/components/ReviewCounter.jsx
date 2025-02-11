import useReviewContext from "../contexts/ReviewContext";

export default function ReviewCounter() {
  const { reviewItems } = useReviewContext();

  return (
    <>
      ({reviewItems.filter((rI) => !rI.isReviewed).length} /{" "}
      {reviewItems.length})
    </>
  );
}
