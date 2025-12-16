import React from "react";
import type { Event } from "../../types/Event";

interface EventListProps {
  events: Event[];
  onEventClick: (event: Event) => void;
  addToCart: (event: Event) => void;
  selectedDate?: string;
}

const EventList: React.FC<EventListProps> = ({
  events,
  onEventClick,
  addToCart,
  selectedDate,
}) => {
  return (
    <div className="mt-6 bg-white dark:bg-gray-800 rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-3">
        {selectedDate ? `Classes on ${selectedDate}` : "All Classes This Month"}
      </h2>

      <div className="divide-y dark:divide-gray-700">
        {events.map((ev) => (
          <div
            key={ev.id}
            className="p-3 hover:bg-blue-50 dark:hover:bg-gray-700 rounded"
          >
            <div
              className="cursor-pointer"
              onClick={() => onEventClick(ev)}
            >
              <p className="font-semibold">{ev.title}</p>
              <p className="text-sm">
                {ev.date} – {ev.time} ({ev.instructor})
              </p>
            </div>

            <button
              onClick={() => addToCart(ev)}
              className="px-3 py-1 text-xs rounded bg-green-600 text-white hover:bg-green-700 mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
