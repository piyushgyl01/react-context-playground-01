import { Routes, Route } from "react-router-dom";
import Pending from "./pages/Pending";
import Reporting from "./pages/Reporting";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";

import "./styles.css";

import { ReviewProvider } from "./contexts/ReviewContext";
import Review from "./pages/Review";

export default function App() {
  return (
    <ReviewProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="pending" element={<Pending />} />
          <Route path="reporting" element={<Reporting />} />{" "}
          <Route path="review" element={<Review />} />
        </Route>
      </Routes>
    </ReviewProvider>
  );
}
