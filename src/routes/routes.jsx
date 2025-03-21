import { BrowserRouter, Route, Routes } from "react-router-dom";
import CalendarPage from "../pages/CalendarPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
