import React from "react";
import type { Event } from "../../types/Event";
import { useBooking } from "../../context/BookingContext";
import { mapEventToLesson } from "../../utils/mapEventToLesson";
import { format } from "date-fns";

interface EventModalProps {
  event: Event | null;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const { addToCart } = useBooking();

  if (!event) return null;

  const handleAddToCart = () => {
    const lesson = mapEventToLesson(event);
    addToCart(lesson);
    onClose();
  };

    return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div
        className="
          w-full max-w-md rounded-lg shadow-xl overflow-hidden
          bg-white text-gray-900
          dark:bg-slate-900 dark:text-slate-100
        "
      >
        {/* HEADER */}
        <div
          className="
            px-4 py-3 flex justify-between items-center
            bg-blue-600 text-white
            dark:bg-slate-800
          "
        >
          <div>
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-sm opacity-90">
              {format(new Date(event.date), "d MMMM yyyy")} • {event.time}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-2xl font-bold hover:opacity-80"
          >
            ×
          </button>
        </div>

        {/* BODY */}
        <div className="p-4 text-sm space-y-3">
          <p>
            <span className="font-semibold">Instructor:</span>{" "}
            {event.instructor}
          </p>
          <p>
            <span className="font-semibold">Location:</span>{" "}
            {event.location || "Driving school"}
          </p>
          <p>
            <span className="font-semibold">Price:</span>{" "}
            {event.price} kr
          </p>
        </div>

        {/* FOOTER */}
        <div
          className="
            p-4 flex justify-end gap-2
            bg-gray-100
            dark:bg-slate-800
          "
        >
          <button
            onClick={onClose}
            className="
              px-4 py-2 rounded
              bg-gray-300 text-gray-900
              hover:bg-gray-400
              dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600
            "
          >
            Close
          </button>

          <button
            onClick={handleAddToCart}
            className="
              px-4 py-2 rounded
              bg-green-600 text-white
              hover:bg-green-700
            "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

};

export default EventModal;
