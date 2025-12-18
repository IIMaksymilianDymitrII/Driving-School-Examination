import type { Event } from "../types/Event";

// Sample scheduled events data
const scheduleEvents: Event[] = [
    { id: 1, date: "2025-12-03", time: "10:00", title: "City Traffic", instructor: "Anna", location: "Stockholm City", price: 1200 },
    { id: 2, date: "2025-12-03", time: "10:00", title: "City Traffic", instructor: "Niklas", location: "Stockholm City", price: 1200 },
    { id: 3, date: "2025-12-03", time: "14:00", title: "Mock Test", instructor: "Jonas", location: "Huddinge", price: 1000 },
    { id: 4, date: "2025-12-03", time: "14:00", title: "Mock Test", instructor: "Sam", location: "Huddinge", price: 1000 },
    { id: 5, date: "2025-12-05", time: "16:00", title: "Highway Practice", instructor: "Sara", location: "E4 Stockholm", price: 600 },
    { id: 6, date: "2025-12-05", time: "16:00", title: "Country Road", instructor: "Josefin", location: "E4 Oslo", price: 800 },
    { id: 7, date: "2025-12-07", time: "09:00", title: "Parking Training", instructor: "Anna", location: "Veddesta", price: 700 },
    { id: 8, date: "2025-12-07", time: "09:00", title: "Parking Training", instructor: "Niklas", location: "Jakobsberg", price: 700 },
    { id: 9, date: "2025-12-09", time: "13:00", title: "Mock Test", instructor: "Jonas", location: "Järfälla", price: 1000 },
    { id: 10, date: "2025-12-09", time: "13:00", title: "Mock Test", instructor: "Sam", location: "Upplands Väsby", price: 1000 },
    { id: 11, date: "2025-12-12", time: "12:00", title: "City Traffic", instructor: "Sara", location: "Södermalm", price: 1200 },
    { id: 12, date: "2025-12-14", time: "11:00", title: "Driving Lesson", instructor: "Anna", location: "Kista", price: 1500 },
    { id: 13, date: "2025-12-16", time: "11:00", title: "Driving Lesson", instructor: "Anna", location: "Kista", price: 1500 },
    { id: 14, date: "2025-12-18", time: "15:00", title: "Driving Lesson", instructor: "Jonas", location: "Sollentuna", price: 1500 },
    { id: 15, date: "2025-12-20", time: "10:00", title: "Motorway Lesson", instructor: "Anna", location: "E18", price: 900 },
    { id: 16, date: "2025-12-22", time: "16:00", title: "Night Driving", instructor: "Sara", location: "Järfälla", price: 1200 },
    { id: 17, date: "2025-12-25", time: "09:00", title: "Driving Lesson", instructor: "Anna", location: "Flemingsberg", price: 1500 },
    { id: 18, date: "2025-12-27", time: "18:00", title: "Parallel Parking", instructor: "Jonas", location: "Sundbyberg", price: 800 },
    { id: 19, date: "2025-12-29", time: "16:00", title: "Mock Test", instructor: "Sara", location: "Bromma", price: 1000 },
  ];

  export default scheduleEvents;