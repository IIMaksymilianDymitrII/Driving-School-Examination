import Wheel from "../assets/racing.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

const signinLink: string = `http://localhost:5000/signin`;

const SignIn = () => {
  const { themeColors } = useTheme();
  const [err, setErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const [formData, setFormData] = useState({
    name: ``,
    lastname: ``,
    email: ``,
    password: ``,
  });

  const collectInfo = [
    { name: `name`, label: `Name`, type: `text` },
    { name: `lastname`, label: `Last Name`, type: `text` },
    { name: `email`, label: `Email Address`, type: `text` },
    { name: `password`, label: `Password`, type: `password` },
  ];

  const nav = useNavigate();

  const SignInProtocol = async () => {
    try {
      const res = await axios.post(signinLink, {
        name: formData.name,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem(`token`, res.data.token);
      nav(`/dashboard`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (
      !formData.name.trim() ||
      !formData.lastname.trim() ||
      !formData.email.trim() ||
      !formData.password.trim()
    ) {
      setErr(true);
      setEmailErr(false);
      return;
    }
    if (!formData.email.includes(`@`) || !formData.email.includes(`.`)) {
      setErr(false);
      setEmailErr(true);
      return;
    }
    setErr(false);
    setEmailErr(false);
    SignInProtocol();
  };

  return (
    <div
      className={`flex justify-center items-center w-screen min-h-screen ${themeColors.bg} p-4`}
    >
      <div
        className={`bg-slate-900 rounded-2xl p-6 text-white font-semibold w-full max-w-md flex flex-col gap-6 ${themeColors.bgWidget} border ${themeColors.border}`}
      >
        <div className={`text-center flex flex-col items-center gap-3`}>
          <img src={Wheel} alt={`Logo`} className={`h-20 w-20 invert`} />
          <h1 className={`text-2xl font-bold`}>Create Account</h1>
        </div>

        <div className={`flex flex-col gap-4`}>
          {collectInfo.map((info) => (
            <div key={info.name} className={`flex flex-col gap-1`}>
              <label className={`font-semibold`}>{info.label}</label>
              <input
                name={info.name}
                type={info.type}
                value={formData[info.name as keyof typeof formData]}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${themeColors.elevated} ${themeColors.border}`}
                placeholder={`Enter your ${info.label.toLowerCase()}`}
              />
            </div>
          ))}

          {err && (
            <p
              className={`text-center bg-red-600 rounded px-2 py-1 font-medium`}
            >
              Please fill in all required fields
            </p>
          )}
          {emailErr && (
            <p
              className={`text-center bg-red-600 rounded px-2 py-1 font-medium`}
            >
              Please enter a valid email
            </p>
          )}

          <button
            onClick={handleSubmit}
            className={`w-full bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg py-2 font-semibold mt-2 transition-colors`}
          >
            Create Account
          </button>

          <div className={`flex justify-around py-2`}>
            <p>Already a Member?</p>
            <button
              onClick={() => nav(`/login`)}
              className={`px-3 text-blue-500 hover:text-blue-400 font-semibold`}
            >
              Login Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
