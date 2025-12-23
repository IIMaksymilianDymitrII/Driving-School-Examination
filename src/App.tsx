import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";
import { useTheme } from "./context/ThemeContext";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

const App: React.FC = () => {
  const { themeColors } = useTheme();
  return (
    <div className={`min-h-screen ${themeColors.bg}`}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedules" element={<SchedulePage />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
