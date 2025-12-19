import Wheel from "../assets/racing.png";
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const nav = useNavigate()

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitEmail = async () => {
    try {
      const res = await axios.post("http://localhost:5000/forgot-password", { email });
      setMessage("Check your email for reset link. Token: " + res.data.resetToken);
    } catch (err:unknown) {
      console.error(err);
      setMessage("Error: " + err.response.data.error);
    }
  };



  return (
    <main className="flex justify-center items-center w-screen h-screen bg-slate-950">
      <section className="bg-slate-900 rounded-2xl p-3 text-white font-semibold  w-[320px]">
        <div className="text-center p-8 text-2xl flex flex-col items-center justify-center gap-3">
          <img src={Wheel} alt="Logo" className="size-20 invert " />
          <h1>Forgot Password</h1>
        </div>
        <div className="flex flex-col gap-3 px-2">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h2>Email Address</h2>
              <input
                type="text"
                className="w-full pl-2 bg-slate-800 border border-slate-500 border-solid rounded-lg"
              />
            </div>
          </div>
          <button onClick={ () => nav("/resetpassword")} className="w-full my-2 bg-indigo-700  rounded-lg cursor-pointer p-2 hover:bg-indigo-600">

          Verify Email
          </button>
        </div>
      </section>
    </main>
  )
}

export default ForgotPassword