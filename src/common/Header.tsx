import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useBooking } from "../context/BookingContext";
import drivingWizardLogo from "../assets/driving-wizard-logo.png";
import { useTheme } from "../context/ThemeContext";
import ThemeButton from "../components/Header/ThemeButton";

const Header: React.FC = () => {
  const { cart } = useBooking();
  const { themeColors } = useTheme();

  return (
    <header className={`border-b shadow-sm ${themeColors.bg} ${themeColors.text}`}>

      <div className={`${themeColors.bg} text-center py-2 text-sm ${themeColors.text}`}>
        New student?{" "}
        <Link
          to="/register/step-1"
          className="font-semibold text-blue-700 hover:underline"
        >
          Sign up here
        </Link>
        <ThemeButton/>
      </div>

      {/* Main nav */}
      <div className={`max-w-5xl mx-auto px-4 py-3 flex items-center justify-between ${themeColors.text}`}>
       
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-700 ${isActive ? "font-semibold text-blue-700" : "text-gray-700"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/classes"
            className={({ isActive }) =>
              `hover:text-blue-700 ${isActive ? "font-semibold text-blue-700" : "text-gray-700"}`
            }
          >
            Classes
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `hover:text-blue-700 ${isActive ? "font-semibold text-blue-700" : "text-gray-700"}`
            }
          >
            Cart ({cart.length})
          </NavLink>
          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              `hover:text-blue-700 ${isActive ? "font-semibold text-blue-700" : "text-gray-700"}`
            }
          >
            Checkout
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
