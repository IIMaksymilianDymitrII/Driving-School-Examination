import { useState } from "react";
import Wheel from "../assets/racing.png";
import { useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";


const ResetPassword = () => {
  const [message, setMessage] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const nav = useNavigate();
  const [searchParams] = useSearchParams()
  const token = searchParams.get("token")

  const submitNewPassword = async () => {
    if (!password) {
      setMessage("Password cannot be empty");
      return;
    }

    try {
      await axios.post("http://localhost:5000/reset-password", {
        token,
        newPassword: password,
      });
      setMessage("Password updated successfully!");
      setTimeout(() => nav("/"), 2000);
    } catch (err: any) {
      console.error(err);
      setMessage(err?.response?.data?.error || "Something went wrong");
    }
  };
  return (
    <main className="flex justify-center items-center w-screen h-screen bg-slate-950">
      <section className="bg-slate-900 rounded-2xl p-3 text-white font-semibold ">
        <div className="text-center p-8 text-2xl flex flex-col items-center justify-center gap-3">
          <img src={Wheel} alt="Logo" className="size-20 invert " />
          <h1>Setup New Password</h1>
        </div>
        <div className="flex flex-col gap-3 px-2">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h2>New Password</h2>
              <input
              value={password}
                type={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-2 bg-slate-800 border border-slate-500 border-solid rounded-lg"
              />
            </div>
          </div>
          <button
            onClick={() => submitNewPassword} 
            className="w-full my-2 bg-indigo-700  rounded-lg cursor-pointer p-2 hover:bg-indigo-600"
          >
            Create New Password
          </button>
          {message && <p className="text-red-500 text-center mt-2">{message}</p>}
        </div>
      </section>
    </main>
  );
};

export default ResetPassword;
