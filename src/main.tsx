import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./Context/UserInfoContext.tsx";

const client = import.meta.env.VITE_GOOGLE_CLIENT_ID

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
    <GoogleOAuthProvider clientId={client} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
   </AuthProvider>
  </StrictMode>
);
