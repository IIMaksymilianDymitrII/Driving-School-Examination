import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

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
      className={`p-3 flex flex-col w-[400px] gap-2 ${themeColors.bgWidget} border ${themeColors.border} rounded-xl `}
    >
      <p className="font-semibold">Email Address</p>
      <input
        className="rounded-xl text-black pl-2"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <p className="font-semibold">Name</p>
      <input
        className="rounded-xl text-black pl-2"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <p className="font-semibold">Lastname</p>
      <input
        className="rounded-xl text-black pl-2"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <button
        className="bg-blue-600 w-fit self-center rounded-xl px-2 py-1 font-semibold"
        onClick={() => setStep(1)}
      >
        Next
      </button>
    </section>,

    <section
      className={`p-3 flex flex-col w-[400px] gap-2 ${themeColors.bgWidget} border ${themeColors.border} rounded-xl `}
    >
      <h1>Choose Payment Method</h1>
      <ul>
        <li>
          <button>Apple Pay</button>
        </li>
        <li>
          <button onClick={() => setStep(2)}>Credit/Debit Card</button>
        </li>
        <li>
          <button>Google Pay</button>
        </li>
      </ul>
    </section>,

    <section
      className={`p-3 flex flex-col w-[400px] gap-2 ${themeColors.bgWidget} border ${themeColors.border} rounded-xl `}
    >
      <h1 className="font-semibold text-2xl self-center">Card Payment</h1>
      <p>Card Number</p>
      <input
        className="rounded-xl text-black pl-2"
        type="text"
        name="cardNumber"
        value={formData.cardNumber}
        onChange={handleChange}
      />
      <div className="flex gap-2">
        <div>
          <p>CVV</p>
          <input
            className="rounded-xl text-black pl-2 h-7"
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Valid Until</p>
          <input
            className="rounded-xl text-black pl-2"
            type="month"
            name="validUntil"
            value={formData.validUntil}
            onChange={handleChange}
          />
        </div>
      </div>
      <button onClick={() => setStep(3)}>Submit</button>
    </section>,

    <div>
      <h1>Thank You for your Purchase</h1>
      <p>Your Receipt will be sent via Email</p>
    </div>,
  ];

  return (
    <main className={`min-h-screen ${themeColors.text}`}>{steps[step]}</main>
  );
};

export default CheckoutPage;
