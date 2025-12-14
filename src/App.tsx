import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./pages/HomePage";
import { useTheme } from "./context/ThemeContext";

const App: React.FC = () => {
  const { themeColors } = useTheme();
  return (
    <div className={`min-h-screen ${themeColors.bg} ${themeColors.text}`}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
