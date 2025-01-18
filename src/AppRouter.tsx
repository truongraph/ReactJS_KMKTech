import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import NotFound from "./pages/notfound";
import HomePage from "./pages";



export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
