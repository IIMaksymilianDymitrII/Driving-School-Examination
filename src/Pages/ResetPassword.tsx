import { useState } from "react";
import Wheel from "../assets/racing.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useTheme } from "../Context/ThemeContext";

const ResetPassword = () => {
  const [message, setMessage] = useState(``);
  const [password, setPassword] = useState(``);

  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get(`token`);
  const { themeColors } = useTheme();

  const submitNewPassword = async () => {
    if (!password) {
      setMessage(`Password cannot be empty`);
      return;
    }

    try {
      await axios.post(`http://localhost:5000/reset-password`, {
        token,
        newPassword: password,
      });
      setMessage(`Password updated successfully!`);
      setTimeout(() => nav(`/`), 2000);
    } catch (err: any) {
      console.error(err);
      setMessage(err?.response?.data?.error || `Something went wrong`);
    }
  };

  return (
    <main
      className={`flex justify-center items-center w-screen min-h-screen ${themeColors.bg} p-4`}
    >
      <section
        className={`border rounded-2xl p-6 text-white font-semibold w-full max-w-sm flex flex-col gap-6 ${themeColors.border} ${themeColors.bgWidget} border ${themeColors.border}`}
      >
        <div className={`text-center flex flex-col items-center gap-3`}>
          <img src={Wheel} alt={`Logo`} className={`w-20 invert`} />
          <h1 className={`text-2xl font-bold`}>Setup New Password</h1>
        </div>

        <div className={`flex flex-col gap-4`}>
          <label className={`font-semibold`}>New Password</label>
          <input
            type={`password`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${themeColors.elevated} ${themeColors.border}`}
            placeholder={`Enter your new password`}
          />
          <button
            onClick={submitNewPassword}
            className={`w-full bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg py-2 font-semibold transition-colors`}
          >
            Create New Password
          </button>

          {message && (
            <p className={`text-center mt-2 text-red-500 font-medium`}>
              {message}
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default ResetPassword;
