import Wheel from "../assets/racing.png";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (

    <div className="flex justify-center items-center w-screen h-screen bg-slate-950">
      <div className="bg-slate-900 rounded-2xl p-3 text-white font-semibold ">
        <div className="text-center p-8 text-2xl flex flex-col items-center justify-center gap-3">
          <img src={Wheel} alt="Logo" className="size-20 invert " />
          <h1>Setup New Password</h1>
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
                <h2>Create New Password</h2>
              </div>
              <input
                type="text"
                className="w-full pl-2 bg-slate-800 border border-slate-500 border-solid rounded-lg"
              />
            </div>
          </div>
          <button className="w-full my-2 bg-indigo-700  rounded-lg cursor-pointer p-2 hover:bg-indigo-600">
            <Link to="/">
          Create New Password
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword