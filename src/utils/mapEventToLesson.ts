import type { Event } from "../types/Event";
import type { Lesson } from "../context/BookingContext";

export const mapEventToLesson = (ev: Event): Lesson => {
  return {
    id: ev.id.toString(),
    title: ev.title,
    date: ev.date,
    time: ev.time,
    duration: "1h",               // default duration, or decide based on title
    instructor: ev.instructor,
    location: ev.location,
    price: ev.price,
  };
};
