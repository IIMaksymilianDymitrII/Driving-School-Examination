import Wheel from "../assets/racing.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const collectInfo = [
    { name: "Name", type: "text" },
    { name: "Surname", type: "text" },
    { name: "Email Address", type: "text" },
    { name: "Social Security Number", type: "text" },
    { name: "Phone", type: "text" },
    { name: "Password", type: "text" },
  ];

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-950">
      <div className="bg-slate-900 rounded-2xl p-3 text-white font-semibold w-[360px]">
        <div className="text-center p-8 text-2xl flex flex-col items-center justify-center gap-3">
          <img src={Wheel} alt="Logo" className="h-20 w-20 invert" />
          <h1>Create Account</h1>
        </div>
        <div className="flex flex-col gap-3 px-2">
          {collectInfo.map((info) => (
            <div key={info.name} className="flex flex-col gap-1">
              <h2>{info.name}</h2>
              <input
                type={info.type}
                className="w-full pl-2 bg-slate-800 border border-slate-500 border-solid rounded-lg"
              />
            </div>
          ))}
          <Link to="/">
          <button className="w-full bg-indigo-700 rounded-lg cursor-pointer p-2 hover:bg-indigo-600 mt-2">
          Create Account
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
