import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useBooking } from "../context/BookingContext";
import drivingWizardLogo from "../assets/driving-wizard-logo.png";
import { useTheme } from "../context/ThemeContext";
import ThemeButton from "../components/Header/ThemeButton";

const Header: React.FC = () => {
  const { cart } = useBooking();
  const { themeColors } = useTheme();

  const navPages = [
    { name: "Home", link: "/" },
    { name: "Schedules", link: "/schedules" },
    { name: "Cart", link: "/cart" },
    { name: "Checkout", link: "/checkout" },
  ];

  return (
    <header className={`border-b ${themeColors.border} ${themeColors.surface}`}>

      <div
        className={` flex justify-center items-center text-center py-2 text-sm ${themeColors.text}`}
      >
        <p className="pr-3">New student?</p>
        <Link
          to="/register/step-1"
          className="font-semibold text-blue-700 hover:underline"
        >
          {" "}
          Sign up here{" "}
        </Link>

        <ThemeButton />
      </div>

      <div
        className={`max-w-5xl mx-auto px-4 py-3 flex items-center justify-between ${themeColors.text}`}
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-blue-700 tracking-tight"
        >
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
            <img
              src={drivingWizardLogo}
              alt="Driving Wizard Logo"
              className="h-20 w-20 object-contain"
            />
          </div>
          Private Driving Practice
        </Link>

        <nav className="flex gap-4 text-sm">
          {navPages.map((page) => (
            <NavLink
              key={page.link}
              to={page.link}
              className={({ isActive }) =>
                `hover:text-blue-700 ${
                  isActive ? themeColors.accent : themeColors.textMuted

                }`
              }
            >
              {" "}
              {/* {page.name} */}

              {/* // Special handling for Cart to show item count */}
              {page.name === "Cart" ? (
                  <span className="flex items-center gap-1">
                    Cart
                    <span
                      className={`
                        px-1.5 py-0.5 rounded-full text-xs font-semibold
                        bg-green-600 text-white
                      `}
                    >
                      {cart.length}
                    </span>
                  </span>
                ) : (
                  page.name
                )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
