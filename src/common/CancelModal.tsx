import React from "react";

interface CancelModalProps {
  open: boolean;
  onConfirm: () => void; // "Yes, Cancel"
  onClose: () => void;   // "No, Continue"
}

const CancelModal: React.FC<CancelModalProps> = ({ open, onConfirm, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
        <h2 className="text-lg font-semibold mb-2 text-red-600">Cancel registration?</h2>
        <p className="text-sm text-gray-700 mb-4">
          If you cancel now, your current progress may be lost. Are you sure you want to go back?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-gray-300 text-sm hover:bg-gray-100"
          >
            No, Continue
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-600 text-white text-sm hover:bg-red-700"
          >
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
