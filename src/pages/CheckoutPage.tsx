import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import GoogleLogo from "../assets/Google__G__logo.svg.png";
import AppleLogo from "../assets/AppleLogo.png";

const CheckoutPage = () => {
  const { themeColors } = useTheme();
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    cardNumber: "",
    cvv: "",
    validUntil: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const steps = [
    <section
      className={`p-3 flex flex-col w-[400px] gap-2 ${themeColors.bgWidget} border ${themeColors.border} rounded-xl h-fit mt-[250px] `}
    >
      <p className="font-semibold">Email Address</p>
      <input
        className={`rounded-xl pl-2 h-8  ${themeColors.elevated} ${themeColors.border} border`}
        placeholder="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <p className="font-semibold">Name</p>
      <input
        className={`rounded-xl pl-2 h-8  ${themeColors.elevated} ${themeColors.border} border`}
        placeholder="Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <p className="font-semibold">Last name</p>
      <input
        className={`rounded-xl pl-2 h-8  ${themeColors.elevated} ${themeColors.border} border`}
        placeholder="Last name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 w-fit self-center rounded-xl px-4 py-2 font-semibold mt-3"
        onClick={() => setStep(1)}
      >
        Next
      </button>
    </section>,

    <section
      className={`p-4 flex flex-col w-[400px] gap-2 ${themeColors.bgWidget} border ${themeColors.border} rounded-xl mt-[250px] h-fit`}
    >
      <h1 className="font-semibold text-2xl self-center">Card Payment</h1>
      <p className="font-semibold">Card Number</p>
      <input
        className={`rounded-xl pl-2 h-8  ${themeColors.elevated} ${themeColors.border} border`}
        type="text"
        name="cardNumber"
        value={formData.cardNumber}
        onChange={handleChange}
      />
      <div className="flex gap-2">
        <div>
          <p className="font-semibold">CVV</p>
          <input
            className={`rounded-xl pl-2 h-8  ${themeColors.elevated} ${themeColors.border} border`}
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
          />
        </div>
        <div>
          <p className="font-semibold">Valid Until</p>
          <input
            className={`rounded-xl pl-2 h-8  ${themeColors.elevated} ${themeColors.border} border`}
            type="month"
            name="validUntil"
            value={formData.validUntil}
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        className="bg-green-700 hover:bg-green-600 w-full self-center rounded-xl px-4 py-2 font-semibold mt-3"
        onClick={() => setStep(2)}
      >
        Submit
      </button>
      <hr className="my-3"/>
      <ul className="flex justify-center items-center gap-2">
        <li>
          <button>
            <div className="bg-white flex items-center justify-center gap-2 font-bold text-xl text-black h-10 rounded-xl w-[180px] p-3">
              <img src={AppleLogo} alt="Apple Logo" className="w-3.5" />
              Pay
            </div>
          </button>
        </li>

        <li>
          <button>
            <div className="bg-white flex items-center justify-center gap-2 font-bold text-xl text-black h-10 rounded-xl w-[180px] p-3">
              <img src={GoogleLogo} alt="Google Logo" className="w-5" />
              Pay
            </div>
          </button>
        </li>
      </ul>
    </section>,

 
    <section className="flex flex-col items-center text-center flex-1 mt-[250px]">
      <h1 className="font-bold text-4xl p-3">Thank You for your Purchase</h1>
      <p>Your Receipt will be sent via Email</p>
    </section>
  ];

  return (
    <main className={`min-h-screen flex justify-center ${themeColors.text}`}>{steps[step]}</main>
  );
};

export default CheckoutPage;
