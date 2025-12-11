import { Routes, Route } from "react-router-dom";
import LogIn from "./Pages/Login";
import SignIn from "./Pages/Signin";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn/>} />
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
    </Routes>
  );
}

export default App;
