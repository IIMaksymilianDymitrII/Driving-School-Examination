import React from "react";
import type { Event } from "../../types/Event";
import { useTheme } from "../../context/ThemeContext";


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
  const { themeColors } = useTheme();

  return (
    <div
      className={`mt-6 ${themeColors.surface} border ${themeColors.border} rounded-xl p-4`}
    >
      <h2 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
        {selectedDate ? `Classes on ${selectedDate}` : "All Classes This Month"}
      </h2>

      <div className={`divide-y ${themeColors.border}`}>
        {events.map((ev) => (
          // <div
          //   key={ev.id}
          //   className="p-3 hover:bg-blue-50 dark:hover:bg-gray-700 rounded"
          // >
          <div
            key={ev.id}
            className={`
              p-3 rounded transition
              hover:${themeColors.elevated}
            `}
          >

            {/* <div
              className="cursor-pointer"
              onClick={() => onEventClick(ev)}
            > */}
            <div
              className={`
                cursor-pointer
                group
              `}
              onClick={() => onEventClick(ev)}
            >

              {/* <p className="font-semibold">{ev.title}</p>
              <p className="text-sm"> */}
              {/* <p className={`font-semibold ${themeColors.text}`}>{ev.title}</p> */}
              <p
                  className={`
                    font-semibold
                    ${themeColors.text}
                    group-hover:${themeColors.text}
                  `}
                >
                  {ev.title}
              </p>

              {/* <p className={`text-sm ${themeColors.textMuted}`}>
                {ev.date} – {ev.time} ({ev.instructor})
              </p> */}
              <p
                className={`
                  text-sm
                  ${themeColors.textMuted}
                  group-hover:${themeColors.text}
                `}
              >
                {ev.date} – {ev.time} ({ev.instructor})
              </p>
            </div>

            <button
              onClick={() => addToCart(ev)}
              // className="px-3 py-1 text-xs rounded bg-green-600 text-white hover:bg-green-700 mt-2"
              className="px-3 py-1 text-xs rounded bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-400 mt-2"
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
