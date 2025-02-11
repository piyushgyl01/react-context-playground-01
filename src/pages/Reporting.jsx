import useReviewContext from "../contexts/ReviewContext";

export default function Reporting() {
  const { reviewItems } = useReviewContext();

  return (
    <main className="app">
      <h1>Status</h1>
      <hr />
      <h1>Pending</h1>
      <p>{reviewItems.filter((item) => !item.isReviewed).length}</p>
      <h1>Reviewed</h1>
      <p>{reviewItems.filter((item) => item.isReviewed).length}</p>
    </main>
  );
}
