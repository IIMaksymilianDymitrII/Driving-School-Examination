import Wheel from "../assets/racing.png"
const SignIn = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="bg-slate-900 rounded-2xl p-3 text-white font-semibold">
        <div className="text-center p-8 text-2xl flex flex-col items-center justify-center gap-3">
          <img src={Wheel} alt="Logo" className="size-20 "/>
          <h1>Sign in to your account</h1>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h2>Email Address</h2>
              <input
                type="text"
                className="w-full bg-slate-800 border border-slate-500 border-solid rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <div className="flex justify-between">
                <h2>Password</h2>
                <p>
                  <a href="">Forgot Password?</a>
                </p>
              </div>
              <input
                type="text"
                className="w-full bg-slate-800 border border-slate-500 border-solid rounded-lg"
              />
            </div>
          </div>
          <button className="w-full bg-indigo-700  rounded-lg  p-2">Sign in</button>
          <div className="flex gap-3 ">
            <button 
            className="w-1/2 bg-slate-500 rounded-lg p-2"
            >
              <img src="" alt="" />
              Google
            </button>
            <button
            className="w-1/2 bg-slate-500 rounded-lg p-2"
            >
              <img src="" alt="" />
              Apple
            </button>
          </div>
        </div>
        <div className="p-3 text-center flex justify-around">
          <p>
            Not a member? 
          </p>
          <p>
<a href="">Become our Member!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
