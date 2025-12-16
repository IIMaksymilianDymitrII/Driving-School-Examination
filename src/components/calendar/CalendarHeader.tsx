import React from "react";
import { format, addMonths, subMonths } from "date-fns";

interface CalendarHeaderProps {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  setCurrentDate,
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      {/* Prev / Next Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
        >
          ← Prev
        </button>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {format(currentDate, "MMMM yyyy")}
        </h2>

        <button
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
        >
          Next →
        </button>
      </div>

      {/* Optional dark mode toggle */}
      {toggleDarkMode && (
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      )}
    </div>
  );
};

export default CalendarHeader;
