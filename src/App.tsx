import { Routes, Route } from "react-router-dom";
import LogIn from "./Pages/Login";
import SignIn from "./Pages/Signin";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn/>} />
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/resetpassword" element={<ResetPassword/>}/>
    </Routes>
  );
}

export default App;
