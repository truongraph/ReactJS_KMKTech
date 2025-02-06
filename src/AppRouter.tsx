import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages";
import LoginAdmin from "./pages/admin/index.login";
import Hiring from "./pages/index.hiring";
import NotFound from "./pages/notfound";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/admin" element={<LoginAdmin />} />
        {/* <Route path="/admin/dashboard" element={<DasbroadAdmin />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
