import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./Pages/HomePage";
import SchedulePage from "./Pages/SchedulePage";
import { useTheme } from "./Context/ThemeContext";
import CartPage from "./Pages/CartPage";
import LogIn from "./Pages/Login";
import SignIn from "./Pages/Signin";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import CheckoutPage from "./Pages/CheckoutPage";

const App: React.FC = () => {
  const { themeColors } = useTheme();
  return (
    <div className={`min-h-screen ${themeColors.bg}`}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedules" element={<SchedulePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
