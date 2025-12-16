import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./pages/HomePage";
import { useTheme } from "./context/ThemeContext";

import Step1Personal from "./registration/Step1Personal";
import Step2Address from "./registration/Step2Address";
import Step3Contact from "./registration/Step3Contact";
import Step4Summary from "./registration/Step4Summary";
import { RegistrationFormProvider } from "./context/RegistrationFormContext";


const App: React.FC = () => {
  const { themeColors } = useTheme();
  return (
    <div className={`min-h-screen ${themeColors.bg} ${themeColors.text}`}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route
          path="/register/*"
          element={
            <RegistrationFormProvider>
              <Routes>
                <Route path="step-1" element={<Step1Personal />} />
                <Route path="step-2" element={<Step2Address />} />
                <Route path="step-3" element={<Step3Contact />} />
                <Route path="step-4" element={<Step4Summary />} />
              </Routes>
            </RegistrationFormProvider>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
