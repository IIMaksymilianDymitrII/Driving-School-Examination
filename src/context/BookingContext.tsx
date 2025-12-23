import React, { createContext, useContext, useMemo, useState } from "react";

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
  lessons: Lesson[];
  cart: Lesson[];
  addToCart: (lesson: Lesson) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  completePurchase: () => void;
  todayNextLesson: Lesson | null;
  nextAvailableThisWeek: Lesson[];
  purchasedLessons: string[];
}

const BookingContext = createContext<BookingContextValue | undefined>(
  undefined
);

// simple mock seed data
const seedLessons: Lesson[] = [
  {
    id: "L1",
    title: "",
    date: "2025-12-06",
    time: "10:00",
    duration: 120,
    instructor: "Anna Svensson",
    price: 0,
    location: "",
  },
  {
    id: "L2",
    title: "",
    date: "2025-12-06",
    time: "14:00",
    duration: 60,
    instructor: "Jonas Karlsson",
    price: 0,
    location: "",
  },
  {
    id: "L3",
    title: "",
    date: "2025-12-07",
    time: "09:00",
    duration: 120,
    instructor: "Anna Svensson",
    price: 0,
    location: "",
  },
  {
    id: "L4",
    title: "",
    date: "2025-12-08",
    time: "16:00",
    duration: 60,
    instructor: "Sara Lind",
    price: 0,
    location: "",
  },
];

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lessons] = useState<Lesson[]>(seedLessons);
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

  const todayNextLesson = useMemo(() => {
    const todayLessons = lessons.filter((l) => l.date === today);
    if (todayLessons.length === 0) return null;
    // just pick first for now
    return todayLessons[0];
  }, [lessons, today]);

  const completePurchase = () => {
    setPurchasedLessons((prev) => [...prev, ...cart.map((l) => l.id)]);
    setCart([]);
  };

  const nextAvailableThisWeek = useMemo(() => {
    // very simple: all lessons in next 7 days
    const now = new Date();
    const upper = new Date();
    upper.setDate(now.getDate() + 7);

    return lessons.filter((l) => {
      const d = new Date(l.date);
      return d >= now && d <= upper;
    });
  }, [lessons]);

  return (
    <BookingContext.Provider
      value={{
        lessons,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        todayNextLesson,
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
