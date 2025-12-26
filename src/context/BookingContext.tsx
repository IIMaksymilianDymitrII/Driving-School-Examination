import React, { createContext, useContext, useMemo, useState } from "react";

import scheduleEvents from "../data/scheduleEvents";
import { mapEventToLesson } from "../utils/mapEventToLesson";

export interface Lesson {
  id: string;
  title: string;
  date: string; // ISO date string (e.g. 2025-12-06)
  time: string; // e.g. "10:00"
  duration: number;
  instructor: string;
  studentName?: string; // filled once booked
  price: number;
  location?: string;
}

interface BookingContextValue {
  //lessons: Lesson[];
  cart: Lesson[];
  addToCart: (lesson: Lesson) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  completePurchase: () => void;
  todayLessons: Lesson[] | null;
  nextAvailableThisWeek: Lesson[];
  purchasedLessons: string[];
}

const BookingContext = createContext<BookingContextValue | undefined>(
  undefined
);


export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Lesson[]>([]);
  const [purchasedLessons, setPurchasedLessons] = useState<string[]>([]);

  const addToCart = (lesson: Lesson) => {
    setCart((prev) =>
      prev.find((l) => l.id === lesson.id) ? prev : [...prev, lesson]
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((l) => l.id !== id));
  };

  const clearCart = () => setCart([]);

  const today = new Date().toISOString().slice(0, 10);
  
  // Updated todayNextLesson to consider purchasedLessons
  const todayLessons = useMemo(() => {
    const now = new Date();
    const purchasedSet = new Set(purchasedLessons);

      return scheduleEvents
        .map(mapEventToLesson)
        .filter((lesson) => {
          if (lesson.date !== today) return false; // only today
          if (!purchasedSet.has(lesson.id)) return false; // only purchased/booked

          // only future lessons today (so 18:00 shows at 17:30)
          const lessonDateTime = new Date(`${lesson.date}T${lesson.time}`);
          return lessonDateTime >= now;
        })
        .sort((a, b) => a.time.localeCompare(b.time))
        .slice(0, 5);
    }, [today, purchasedLessons]);

  //const todayNextLesson = todayLessons.length > 0 ? todayLessons[0] : null;

  const completePurchase = () => {
    setPurchasedLessons((prev) => [...prev, ...cart.map((l) => l.id)]);
    setCart([]);
  };

  // updated nextAvailableThisWeek to consider purchasedLessons
  const nextAvailableThisWeek = useMemo(() => {
    const now = new Date();

    // Map scheduleEvents to lessons and filter
      return scheduleEvents
      .map(mapEventToLesson)
      .filter((lesson) => {
        const lessonDate = new Date(`${lesson.date}T${lesson.time}`);
        return (
          lessonDate > now &&
          !purchasedLessons.includes(lesson.id)
        );
      })
      .sort((a, b) =>
        `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`)
      )
      .slice(0, 5);
  }, [purchasedLessons]);


  return (
    <BookingContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        todayLessons,
        nextAvailableThisWeek,
        completePurchase,
        purchasedLessons,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used inside BookingProvider");
  }
  return ctx;
};
