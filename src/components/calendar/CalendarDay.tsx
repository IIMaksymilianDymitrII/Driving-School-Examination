import React from "react";
import { format } from "date-fns";
import CalendarEvent from "./CalendarEvent";
import type { Event } from "../../types/Event";
import { useTheme } from "../../Context/ThemeContext";
import { useBooking } from "../../Context/BookingContext";

interface CalendarDayProps {
  day: Date;
  events: Event[];
  isCurrentMonth: boolean;
  onEventClick: (event: Event) => void;
  onDateClick: () => void; // added prop
}

const CalendarDay: React.FC<CalendarDayProps> = ({
  day,
  events,
  isCurrentMonth,
  onEventClick,
  onDateClick, // added prop
}) => {
  const { themeColors } = useTheme();
  return (
  //   <div 
  //     // onClick={() => {
  //     //   if (events.length > 0) onEventClick(events[0]);
  //     // }}
  //     // className={`h-28 p-1 border dark:border-gray-700 text-left relative overflow-hidden 
  //     // ${isCurrentMonth ? "bg-white dark:bg-gray-800" : "bg-gray-100 dark:bg-gray-700 text-gray-400"}`}

  //     className={`h-28 p-2 border ${themeColors.border}
  //     ${isCurrentMonth ? themeColors.surface : themeColors.elevated}`}

  //     onClick={onDateClick}
  //   >
  //     {/* <div className="text-xs font-semibold">{format(day, "d")}</div> */}
  //     <div
  //       className={`text-xs font-semibold ${
  //         isCurrentMonth ? themeColors.text : themeColors.textMuted
  //       }`}
  //     >
  //       {format(day, "d")}
  //     </div>


  //     <div className="mt-1 space-y-1 overflow-hidden">
  //       {events.map((ev) => (
  //         <CalendarEvent 
  //           key={ev.id} 
  //           event={ev} 
  //           // onClick={onEventClick} 
  //           onClick={(e) => {
  //             e.stopPropagation(); // Prevent date click
  //             onEventClick(ev);
  //           }}/>
  //       ))}
  //     </div>
  //   </div>
  // 
    <div
      onClick={!isPast ? onDateClick : undefined}
      className={`
        h-28 p-2 border ${themeColors.border}
        ${isCurrentMonth ? themeColors.surface : themeColors.elevated}
        ${isPast ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {/* Day number */}
      <div
        className={`text-xs font-semibold ${
          isCurrentMonth ? themeColors.text : themeColors.textMuted
        }`}
      >
        {format(day, "d")}
      </div>

      {/* Events */}
      <div className="mt-1 space-y-1 overflow-hidden">
        {events.map((ev) => (
          <CalendarEvent 
            key={ev.id} 
            event={ev} 
            // onClick={onEventClick} 
            onClick={(e) => {
              e.stopPropagation();

              if (isPast) return; // 🚫 block past events

              onEventClick(ev);
            }}
          />
        ))}
      </div>
    </div>

  );
};

export default CalendarDay;
