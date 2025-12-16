import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegistrationForm } from "../../hooks/useRegistrationForm";
import CancelModal from "../../common/CancelModal";

const Step1Personal: React.FC = () => {
  const { formData, updateField, resetForm } = useRegistrationForm();
  const navigate = useNavigate();
  const [showCancel, setShowCancel] = useState(false);

  const personalNumberValid = /^[0-9]{12}$/.test(formData.personalNumber);

  const canContinue =
    personalNumberValid &&
    formData.firstName.trim().length > 0 &&
    formData.lastName.trim().length > 0;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (canContinue) navigate("/register/step-2");
  };

  const handleCancelConfirm = () => {
  resetForm();
  setShowCancel(false);
  navigate("/"); // go to Home
    };


  return (
    <div className="animate-[slideIn_0.3s_ease-out] w-full flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 space-y-8">

        <h1 className="text-2xl font-semibold text-gray-900">Step 1: Personal Details</h1>

        <form className="space-y-6" onSubmit={handleNext}>
          
          {/* Student ID */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Student ID
            </label>
            <input
              type="text"
              value={formData.studentId}
              disabled
              className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 text-gray-600 text-sm"
            />
          </div>

          {/* Personnummer */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Personnummer (YYYYMMDDNNNN)
            </label>
            <input
              value={formData.personalNumber}
              onChange={(e) => updateField("personalNumber", e.target.value)}
              className={`w-full rounded px-3 py-2 outline-none border ${
                formData.personalNumber.length > 0 && !personalNumberValid
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <p className="text-xs text-gray-500 mt-1">
              12 digits, e.g. 199801019999
            </p>
          </div>

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                First Name
              </label>
              <input
                value={formData.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Last Name
              </label>
              <input
                value={formData.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end pt-4 gap-3">
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
        </form>

        <CancelModal
          open={showCancel}
          onConfirm={handleCancelConfirm}
          onClose={() => setShowCancel(false)}
        />

      </div>
    </div>
  );
};

export default Step1Personal;
