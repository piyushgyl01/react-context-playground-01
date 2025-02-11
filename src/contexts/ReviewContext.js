import { createContext, useContext } from "react";
import { useState } from "react";

const ReviewContext = createContext();

const useReviewContext = () => useContext(ReviewContext);

export default useReviewContext;

const initialReviewItems = [
  {
    url: "https://github.com/repo1",
    isReviewed: false,
  },
  {
    url: "https://github.com/repo2",
    isReviewed: false,
  },
  {
    url: "https://github.com/repo3",
    isReviewed: true,
  },
  {
    url: "https://github.com/repo4",
    isReviewed: false,
  },
];

export function ReviewProvider({ children }) {
  const [reviewItems, setReviewItems] = useState(initialReviewItems);

  function toggleReviewItem(selectedUrl) {
    const updatedReviewItems = reviewItems.map((reviewItem) => {
      if (reviewItem.url !== selectedUrl) {
        return reviewItem;
      }
      return {
        ...reviewItem,
        isReviewed: !reviewItem.isReviewed,
      };
    });

    setReviewItems(updatedReviewItems);
  }

  return (
    <ReviewContext.Provider value={{ reviewItems, toggleReviewItem }}>
      {children}
    </ReviewContext.Provider>
  );
}
