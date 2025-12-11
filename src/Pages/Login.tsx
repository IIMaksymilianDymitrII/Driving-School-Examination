import Wheel from "../assets/racing.png";
import { Link} from "react-router-dom";

const LogIn = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-950">
      <div className="bg-slate-900 rounded-2xl p-3 text-white font-semibold ">
        <div className="text-center p-8 text-2xl flex flex-col items-center justify-center gap-3">
          <img src={Wheel} alt="Logo" className="size-20 invert " />
          <h1>Log in to your account</h1>
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
            <div className="flex flex-col gap-1 ">
              <div className="flex justify-between">
                <h2>Password</h2>
                <p className="text-blue-500 hover:text-blue-400">
                  <Link to="/forgotpassword">Forgot Password?</Link>
                </p>
              </div>
              <input
                type="text"
                className="w-full pl-2 bg-slate-800 border border-slate-500 border-solid rounded-lg"
              />
            </div>
          </div>
          <button className="w-full bg-indigo-700  rounded-lg cursor-pointer p-2 hover:bg-indigo-600">
            Sign in
          </button>
          <div className="flex gap-3 ">
            <button className="w-1/2 bg-slate-800 rounded-lg p-2  hover:bg-slate-700">
              <img src="" alt="" />
              Google
            </button>
            <button className="w-1/2 bg-slate-800 rounded-lg p-2 hover:bg-slate-700">
              <img src="" alt="" />
              Apple
            </button>
          </div>
        </div>
        <div className="p-3 text-center flex justify-around">
          <p>Not a member?</p>
          <p className="text-blue-500 hover:text-blue-400">
            <Link to="/signin" >Become our Member!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;