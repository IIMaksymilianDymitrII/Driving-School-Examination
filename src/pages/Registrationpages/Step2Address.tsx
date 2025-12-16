import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegistrationForm } from "../../hooks/useRegistrationForm";
import CancelModal from "../../common/CancelModal";

const Step2Address: React.FC = () => {
  const { formData, updateField, resetForm } = useRegistrationForm();
  const navigate = useNavigate();
  const [showCancel, setShowCancel] = useState(false);

  const canContinue =
    formData.street.trim() &&
    formData.postalCode.trim() &&
    formData.city.trim() &&
    formData.country.trim();

  const handleCancelConfirm = () => {
    resetForm();
    navigate("/"); // go to home
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (canContinue) navigate("/register/step-3");
  };

  return (
    <div className="animate-[slideIn_0.3s_ease-out] w-full flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 space-y-8">

        <h1 className="text-2xl font-semibold text-gray-900">Step 2: Address Details</h1>

        <form className="space-y-6" onSubmit={handleNext}>

          <div>
            <label className="text-sm font-semibold">Street</label>
            <input
              value={formData.street}
              onChange={(e) => updateField("street", e.target.value)}
              className="w-full border rounded px-3 py-2 outline-none border-gray-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">Apartment</label>
              <input
                value={formData.apartment}
                onChange={(e) => updateField("apartment", e.target.value)}
                className="w-full border rounded px-3 py-2 border-gray-300"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Postal Code</label>
              <input
                value={formData.postalCode}
                onChange={(e) => updateField("postalCode", e.target.value)}
                className="w-full border rounded px-3 py-2 border-gray-300"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold">Post Area</label>
            <input
              value={formData.postArea}
              onChange={(e) => updateField("postArea", e.target.value)}
              className="w-full border rounded px-3 py-2 border-gray-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">City</label>
              <input
                value={formData.city}
                onChange={(e) => updateField("city", e.target.value)}
                className="w-full border rounded px-3 py-2 border-gray-300"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Country</label>
              <input
                value={formData.country}
                onChange={(e) => updateField("country", e.target.value)}
                className="w-full border rounded px-3 py-2 border-gray-300"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => navigate("/register/step-1")}
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

export default Step2Address;
