import React, { useState } from "react";
import CalendarHeader from "../components/calendar/CalendarHeader";
import CalendarGrid from "../components/calendar/CalendarGrid";
import EventModal from "../components/calendar/EventModal";
import EventList from "../components/calendar/EventList";

import { useBooking } from "../context/BookingContext";
import { mapEventToLesson } from "../utils/mapEventToLesson";
import type { Event } from "../types/Event";

const SchedulePage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { addToCart } = useBooking();

  // SAMPLE EVENTS
  const events: Event[] = [
    { id: 1, date: "2025-12-03", time: "10:00", title: "City Traffic", instructor: "Anna", location: "Stockholm City" },
    { id: 2, date: "2025-12-03", time: "10:00", title: "City Traffic", instructor: "Niklas", location: "Stockholm City" },
    { id: 3, date: "2025-12-03", time: "14:00", title: "Mock Test", instructor: "Jonas", location: "Huddinge" },
    { id: 4, date: "2025-12-03", time: "14:00", title: "Mock Test", instructor: "Sam", location: "Huddinge" },
    { id: 5, date: "2025-12-05", time: "16:00", title: "Highway Practice", instructor: "Sara", location: "E4 Stockholm" },
    { id: 6, date: "2025-12-05", time: "16:00", title: "Country Road", instructor: "Josefin", location: "E4 Oslo" },
    { id: 7, date: "2025-12-07", time: "09:00", title: "Parking Training", instructor: "Anna", location: "Veddesta" },
    { id: 8, date: "2025-12-07", time: "09:00", title: "Parking Training", instructor: "Niklas", location: "Jakobsberg" },
    { id: 9, date: "2025-12-09", time: "13:00", title: "Mock Test", instructor: "Jonas", location: "Järfälla" },
    { id: 10, date: "2025-12-09", time: "13:00", title: "Mock Test", instructor: "Sam", location: "Upplands Väsby" },
    { id: 11, date: "2025-12-12", time: "12:00", title: "City Traffic", instructor: "Sara", location: "Södermalm" },
    { id: 12, date: "2025-12-14", time: "11:00", title: "Driving Lesson", instructor: "Anna", location: "Kista" },
    { id: 13, date: "2025-12-16", time: "11:00", title: "Driving Lesson", instructor: "Anna", location: "Kista" },
    { id: 14, date: "2025-12-18", time: "15:00", title: "Driving Lesson", instructor: "Jonas", location: "Sollentuna" },
    { id: 15, date: "2025-12-20", time: "10:00", title: "Motorway Lesson", instructor: "Anna", location: "E18" },
    { id: 16, date: "2025-12-22", time: "16:00", title: "Night Driving", instructor: "Sara", location: "Järfälla" },
    { id: 17, date: "2025-12-25", time: "09:00", title: "Driving Lesson", instructor: "Anna", location: "Flemingsberg" },
    { id: 18, date: "2025-12-27", time: "18:00", title: "Parallel Parking", instructor: "Jonas", location: "Sundbyberg" },
    { id: 19, date: "2025-12-29", time: "16:00", title: "Mock Test", instructor: "Sara", location: "Bromma" },
  ];

  const filteredEvents = events.filter((ev) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      ev.title.toLowerCase().includes(q) ||
      ev.instructor.toLowerCase().includes(q);

    const matchesDate = selectedDate ? ev.date === selectedDate : true;

    return matchesSearch && matchesDate;
  });

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-5xl mx-auto">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by class or instructor..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 mb-4 rounded border dark:bg-gray-800 dark:text-white"
        />

        {/* Calendar header */}
        <CalendarHeader
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />

        {/* Calendar grid */}
        <CalendarGrid
          currentDate={currentDate}
          events={events}
          setSelectedEvent={setSelectedEvent}
          setSelectedDate={setSelectedDate}
        />

        {/* List below calendar */}
        <EventList
          events={filteredEvents}
          onEventClick={setSelectedEvent}
          addToCart={(ev) => addToCart(mapEventToLesson(ev))}
          selectedDate={selectedDate || undefined}
        />

        {/* Modal */}
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      </div>
    </main>
  );
};

export default SchedulePage;
