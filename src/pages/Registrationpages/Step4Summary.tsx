import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegistrationForm } from "../../hooks/useRegistrationForm";
import CancelModal from "../../common/CancelModal";

const Step4Summary: React.FC = () => {
  const { formData, updateField, resetForm } = useRegistrationForm();
  const navigate = useNavigate();
  const [showCancel, setShowCancel] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCancelConfirm = () => {
    resetForm();
    setShowCancel(false);
    //navigate(-1);
    navigate("/");
  };

  return (
    <div className="animate-[slideIn_0.3s_ease-out] w-full flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 space-y-8">

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Step 4: Summary & Confirmation
        </h1>

        {/* Summary Card */}
        <div className="space-y-6 text-gray-700">

          {/* Personal */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 border-b pb-1 mb-3">
              Personal
            </h2>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold text-gray-800">Student ID:</span> {formData.studentId}</p>
              <p><span className="font-semibold text-gray-800">Personnummer:</span> {formData.personalNumber}</p>
              <p><span className="font-semibold text-gray-800">Name:</span> {formData.firstName} {formData.lastName}</p>
            </div>
          </section>

          {/* Address */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 border-b pb-1 mb-3">
              Address
            </h2>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold text-gray-800">Street:</span> {formData.street}</p>
              <p><span className="font-semibold text-gray-800">Apartment:</span> {formData.apartment}</p>
              <p>
                <span className="font-semibold text-gray-800">Post Code / Area:</span>{" "}
                {formData.postalCode} {formData.postArea}
              </p>
              <p>
                <span className="font-semibold text-gray-800">City / Country:</span>{" "}
                {formData.city}, {formData.country}
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 border-b pb-1 mb-3">
              Contact
            </h2>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold text-gray-800">Mobile:</span> {formData.mobile}</p>
              <p><span className="font-semibold text-gray-800">Email:</span> {formData.email}</p>
              <p><span className="font-semibold text-gray-800">Username:</span> {formData.username}</p>
            </div>
          </section>

          {/* Newsletter */}
          <div className="flex items-center gap-2 text-sm">
            <input
              id="newsletter"
              type="checkbox"
              checked={formData.newsletter}
              onChange={(e) => updateField("newsletter", e.target.checked)}
              className="h-4 w-4"
            />
            <label htmlFor="newsletter" className="text-gray-700">
              I want to receive newsletters about driving practice updates.
            </label>
          </div>

          {/* Success message */}
          {submitted && (
            <div className="mt-4 p-4 rounded bg-green-100 text-green-700 text-sm border border-green-300">
              Registration completed! You can now proceed to login or booking.
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            type="button"
            onClick={() => navigate("/register/step-3")}
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
              onClick={handleConfirm}
              className="px-5 py-2 rounded bg-green-600 hover:bg-green-700 text-white text-sm"
            >
              Confirm & Register
            </button>
          </div>
        </div>

        <CancelModal
          open={showCancel}
          onConfirm={handleCancelConfirm}
          onClose={() => setShowCancel(false)}
        />
      </div>
    </div>
  );
};

export default Step4Summary;
