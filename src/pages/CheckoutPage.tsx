import { useState, useEffect } from "react";
import { useTheme } from "../Context/ThemeContext";
import GoogleLogo from "../assets/Google__G__logo.svg.png";
import AppleLogo from "../assets/AppleLogo.png";
import { useBooking } from "../Context/BookingContext";

const isValidCardNumber = (number: string) => /^[0-9]{16}$/.test(number);
const isValidCVV = (cvv: string) => /^[0-9]{3}$/.test(cvv);
const isValidValidUntil = (date: string) => {
  if (!date) return false;
  const [year, month] = date.split("-").map(Number);
  const expiry = new Date(year, month - 1);
  const now = new Date();
  expiry.setMonth(expiry.getMonth() + 1);
  expiry.setDate(0);
  return expiry >= now;
};

const CheckoutPage = () => {
  const storedUser = localStorage.getItem("user");
  const loggedInUser = storedUser ? JSON.parse(storedUser) : null;

  const { themeColors } = useTheme();
  const [step, setStep] = useState(loggedInUser ? 1 : 0);
  const [emailError, setEmailError] = useState(false);
  const [error, setError] = useState(false);

  const [cardNumberError, setCardNumberError] = useState(false);
  const [cvvError, setCvvError] = useState(false);
  const [validUntilError, setValidUntilError] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    cardNumber: "",
    cvv: "",
    validUntil: "",
  });

  const { completePurchase } = useBooking();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email" && value.includes("@") && value.includes("."))
      setEmailError(false);
    if ((name === "firstName" || name === "lastName") && value.trim())
      setError(false);

    if (name === "cardNumber" && isValidCardNumber(value))
      setCardNumberError(false);
    if (name === "cvv" && isValidCVV(value)) setCvvError(false);
    if (name === "validUntil" && isValidValidUntil(value))
      setValidUntilError(false);
  };
  // skips first form
  useEffect(() => {
    if (loggedInUser) {
      setFormData((prev) => ({
        ...prev,
        email: loggedInUser.email,
        firstName: loggedInUser.name,
      }));
      setStep(1);
    }
  }, []);

  const steps = [
    <section
      className={`p-3 flex flex-col w-[400px] gap-2 ${themeColors.bgWidget} border ${themeColors.border} rounded-xl h-fit mt-[250px]`}
    >
      <p className="font-semibold">Email Address</p>
      <input
        className={`rounded-xl pl-2 h-8 ${themeColors.elevated} ${themeColors.border} border`}
        placeholder="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <p className="font-semibold">Name</p>
      <input
        className={`rounded-xl pl-2 h-8 ${themeColors.elevated} ${themeColors.border} border`}
        placeholder="Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <p className="font-semibold">Last name</p>
      <input
        className={`rounded-xl pl-2 h-8 ${themeColors.elevated} ${themeColors.border} border`}
        placeholder="Last name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 w-fit self-center rounded-xl px-4 py-2 font-semibold mt-3"
        onClick={() => {
          if (!formData.email.includes("@") || !formData.email.includes(".")) {
            setEmailError(true);
            return;
          }
          if (!formData.firstName.trim() || !formData.lastName.trim()) {
            setError(true);
            setEmailError(false);
            return;
          }
          setEmailError(false);
          setError(false);
          setStep(1);
        }}
      >
        Next
      </button>
      {emailError && (
        <div className="bg-red-700 text-white rounded-xl px-3 font-bold w-fit self-center mt-3">
          <p>Please Enter a Valid Email Address</p>
        </div>
      )}
      {error && (
        <div className="bg-red-700 text-white rounded-xl px-3 font-bold w-fit self-center mt-3">
          <p>Please Enter your Name & Last name</p>
        </div>
      )}
    </section>,

    <section
      className={`p-4 flex flex-col w-[400px] gap-2 ${themeColors.bgWidget} border ${themeColors.border} rounded-xl mt-[250px] h-fit`}
    >
      <h1 className="font-semibold text-2xl self-center">Card Payment</h1>

      <p className="font-semibold">Card Number</p>
      <input
        className={`rounded-xl pl-2 h-8 ${themeColors.elevated} ${themeColors.border} border`}
        type="text"
        name="cardNumber"
        maxLength={16}
        value={formData.cardNumber}
        onChange={handleChange}
      />
      {cardNumberError && (
        <p className="text-red-700 font-bold">Card Number must be 16 digits</p>
      )}

      <div className="flex gap-2 mt-2">
        <div>
          <p className="font-semibold">CVV</p>
          <input
            className={`rounded-xl pl-2 h-8 ${themeColors.elevated} ${themeColors.border} border`}
            type="text"
            name="cvv"
            maxLength={3}
            value={formData.cvv}
            onChange={handleChange}
          />
          {cvvError && (
            <p className="text-red-700 font-bold">CVV must be 3 digits</p>
          )}
        </div>
        <div>
          <p className="font-semibold">Valid Until</p>
          <input
            className={`rounded-xl pl-2 h-8 ${themeColors.elevated} ${themeColors.border} border`}
            type="month"
            name="validUntil"
            value={formData.validUntil}
            onChange={handleChange}
          />
          {validUntilError && (
            <p className="text-red-700 font-bold">
              Card expiration date is invalid or expired
            </p>
          )}
        </div>
      </div>

      <button
        className="bg-green-700 hover:bg-green-600 w-full self-center rounded-xl px-4 py-2 font-semibold mt-3"
        onClick={() => {
          let hasError = false;

          if (!isValidCardNumber(formData.cardNumber)) {
            setCardNumberError(true);
            hasError = true;
          }
          if (!isValidCVV(formData.cvv)) {
            setCvvError(true);
            hasError = true;
          }
          if (!isValidValidUntil(formData.validUntil)) {
            setValidUntilError(true);
            hasError = true;
          }

          if (hasError) return;
          completePurchase();
          setStep(2);
        }}
      >
        Submit
      </button>

      <hr className="my-3" />
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
    </section>,
  ];

  return (
    <main className={`max-h-screen flex justify-center ${themeColors.text}`}>
      {steps[step]}
    </main>
  );
};

export default CheckoutPage;
