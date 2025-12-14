import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegistrationForm } from "../hooks/useRegistrationForm";
import CancelModal from "../common/CancelModal";

const Step3Contact: React.FC = () => {
  const { formData, updateField, resetForm } = useRegistrationForm();
  const navigate = useNavigate();
  const [showCancel, setShowCancel] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  const mobileValid = /^[0-9]{10}$/.test(formData.mobile);
  const emailHasAt = formData.email.includes("@");

  const canContinue = mobileValid && emailHasAt;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (canContinue) navigate("/register/step-4");
  };

  const handleCancelConfirm = () => {
    resetForm();
    navigate(-1);
  };

  const emailBorderClass = emailHasAt
    ? "border-green-500"
    : emailFocused
    ? "border-red-500"
    : "border-gray-300";

  return (
    <div className="animate-[slideIn_0.3s_ease-out] w-full flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 space-y-8">

        <h1 className="text-2xl font-semibold text-gray-900">Step 3: Contact Details</h1>

        <form className="space-y-6" onSubmit={handleNext}>

          {/* Mobile */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Mobile Number</label>
            <input
              value={formData.mobile}
              onChange={(e) => updateField("mobile", e.target.value)}
              className={`w-full rounded px-3 py-2 border ${
                formData.mobile.length > 0 && !mobileValid
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <p className="text-xs text-gray-500 mt-1">10 digits (e.g. 0701234567)</p>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              className={`w-full rounded px-3 py-2 border outline-none ${emailBorderClass}`}
            />
            <p className="text-xs text-gray-500 mt-1">
              Red while typing, green when "@" exists.
            </p>
          </div>

          {/* Username */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Username</label>
            <input
              value={formData.username}
              readOnly
              className="w-full rounded px-3 py-2 bg-gray-100 border border-gray-300 text-gray-700"
            />
            <p className="text-xs text-gray-500 mt-1">
              Automatically generated from email + date of birth.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => navigate("/register/step-2")}
              className="px-5 py-2 rounded border border-gray-300 hover:bg-gray-100 text-sm"
            >
              Back
            </button>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowCancel(true)}
                className="px-5 py-2 rounded border border-gray-300 hover:bg-gray-100 text-sm"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={!canContinue}
                className={`px-5 py-2 rounded text-white text-sm ${
                  canContinue
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-300 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            </div>
          </div>

          <CancelModal
            open={showCancel}
            onConfirm={handleCancelConfirm}
            onClose={() => setShowCancel(false)}
          />

        </form>
      </div>
    </div>
  );
};

export default Step3Contact;
