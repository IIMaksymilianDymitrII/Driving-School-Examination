# Private Driving Practice - A Driving School Web App Examination Project

A modern, responsive frontend only project - **Driving School Booking & Checkout System** - built with **React, TypeScript, Tailwind CSS**, and **Context API**, developed as part of the **Fullstack Open Source (FOS25)** program at **Chas Academy, Stockholm**.

---

## 👥 Authors

- **Suhagan Mostahid** – Fullstack Opensource (FOS25), Chas Academy
- **Maksymilian Dymitr** – Fullstack Opensource (FOS25), Chas Academy

---

## Key Features

### Schedule & Booking

- Interactive calendar view
- Past dates and lessons disabled
- Only current-month lessons shown
- Event modal with lesson details
- Duration displayed in **minutes**

### Shopping Cart

- Add / remove lessons
- Prevent duplicate lessons
- Price calculation with VAT (25%)
- Clear cart functionality

### Checkout Flow (Multi-Step)

1. **Order Summary**

   - Full cart overview
   - Lesson details (date, time, instructor, price)
   - Apply discount codes
   - Navigate back to Cart or Schedules

2. **User Information**

   - Email, name, last name
   - Auto-filled for logged-in users

3. **Payment**

   - Card validation
   - Apple Pay & Google Pay UI

4. **Confirmation**

   - Purchase completion message

### Discounts and benefits

- `STUDENT10` → 10% discount
- `WINTER20` → 20% discount

### Home Page Intelligence

- **Today’s Next Lessons** (based on current time)
- **Next Available Slots** (excluding purchased lessons)
- Weather-based driving tips (Open-Meteo API)

### Responsive Design

- Fully responsive layout
- Mobile burger menu
- Slide-down animation
- Overlay backdrop
- Close on outside click & ESC key

### Theme Support

- Light / Dark mode
- Theme stored globally via Context

---

## Technical Stack

| Technology         | Purpose                     |
| ------------------ | --------------------------- |
| **React**          | UI & component architecture |
| **TypeScript**     | Type safety                 |
| **Tailwind CSS**   | Styling & responsive design |
| **React Router**   | Navigation & routing        |
| **Context API**    | Global state management     |
| **Open-Meteo API** | Live weather data           |
| **Vite**           | Development & build tool    |

---

## Project Structure

```txt
src/
├── assets/           # Images & icons
├── common/           # Shared components (Header)
├── components/       # Feature components
│   ├── calendar/
│   ├── Cart/
│   ├── Header/
│   ├── PageHome/
│   └── PageSchedule/
├── context/          # Theme, Booking, User contexts
├── data/             # Schedule events
├── pages/            # Route pages
├── types/            # TypeScript interfaces
├── utils/            # Helper functions
├── App.tsx
├── main.tsx
└── index.css
```

---

## State Management Strategy

- **BookingContext**

  - Cart state
  - Purchased lessons
  - Discounts
  - Home page lesson calculations

- **ThemeContext**

  - Light/Dark theme handling

- **UserInfoContext**

  - Logged-in user state

All shared state is handled **without Redux**, using React Context and hooks.

---

## Validation & UX Considerations

- Form validation for email, card number, CVV, expiry date
- Prevent booking past lessons
- Prevent double booking
- Disable unavailable lessons
- Keyboard accessibility (ESC to close menus)
- Mobile-first responsive layout

---

## Installation & Usage

```bash
# Clone repository
git clone https://github.com/your-repo/driving-school-examination.git

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📝 Project Reflection

This project demonstrates:

- Clear component separation
- Practical state management without over-engineering
- Realistic business logic (booking, checkout, discounts)
- Responsive UI and accessibility considerations
- Clean code structure aligned with industry standards

The application reflects **real-world frontend development practices** suitable for production-level systems.

---

## Future Work & Improvements

The current implementation fulfills all examination requirements.
However, the system is designed to be **easily extendable**. Below are proposed future improvements that would enhance scalability, usability, and realism.

### Scheduling & Calendar Enhancements

- **Auto-generate calendar months** instead of relying on static schedule data
- **Limit capacity per event** (e.g., max students per lesson)
- **Instructor availability management** (availability windows, days off, holidays)
- **Show “Starts in X minutes” badges** for upcoming lessons
- **Visual urgency badges** in calendar grid (e.g., `Soon`, `Few slots left`)
- **Drag-and-drop calendar booking** for instructors (admin feature)

### Instructor & Lesson Management

- Instructor profiles with:

  - Experience
  - Specializations (city driving, highway, parking, mock test)

- Automatic instructor assignment based on availability
- Conflict detection to prevent double-booking instructors

### Booking & Checkout Improvements

- Inline **remove lesson from checkout summary**
- Persist checkout progress if the page is refreshed
- Support for multiple discount rules (seasonal, referral, loyalty)
- Partial payments or prepaid lesson packages

### User & Authentication Features

- Student dashboard showing:

  - Upcoming lessons
  - Completed lessons
  - Payment history

- Email notifications:

  - Booking confirmation
  - Reminder before lesson

- Guest → registered user conversion after checkout

### Backend & Persistence

- Backend API with:

  - User accounts
  - Lesson persistence
  - Payments

- Database integration (PostgreSQL / MongoDB)
- Role-based access (Student / Instructor / Admin)
- Real payment gateway integration (Stripe / Klarna)

### Analytics & Admin Tools

- Admin dashboard for:

  - Lesson occupancy rates
  - Revenue statistics
  - Instructor performance

- Heatmap of popular lesson times
- Cancellation & rescheduling tracking

### UX & Performance

- Offline-friendly caching
- Skeleton loaders instead of spinners
- Accessibility audit (WCAG compliance)
- Multi-language support (Swedish / English)
- PWA support (installable app)

---

### Educational Reflection

These future enhancements demonstrate how the project can evolve from a **frontend examination project** into a **production-ready booking platform**, following scalable software design principles.

---

## License

This project was created for **educational purposes** as part of the **Chas Academy FOS25 program**.

---
