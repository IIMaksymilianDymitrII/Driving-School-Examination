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
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full overflow-hidden">

        {/* HEADER */}
        <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-sm opacity-80">
              {format(new Date(event.date), "d MMMM yyyy")} • {event.time}
            </p>
          </div>
          <button onClick={onClose} className="text-white text-2xl font-bold">×</button>
        </div>

        {/* BODY */}
        <div className="p-4 text-gray-700 dark:text-gray-200 text-sm space-y-3">
          <p><strong>Instructor:</strong> {event.instructor}</p>
          <p><strong>Location:</strong> {event.location || "Driving school"}</p>
        </div>

        {/* FOOTER */}
        <div className="p-4 bg-gray-100 dark:bg-gray-700 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600">
            Close
          </button>

          <button
            onClick={handleAddToCart}
            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
