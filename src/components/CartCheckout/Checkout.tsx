import { useTheme } from "../../context/ThemeContext";
import { useBooking } from "../../context/BookingContext";

const Checkout = () => {
  const { cart } = useBooking();
  const { themeColors } = useTheme();

  const subtotal = cart.reduce((sum, lesson) => {
    const price = lesson.price;
    return sum + price;
  }, 0);

  const tax = subtotal * 0.25;
  const totalPrice = subtotal + tax;

  return (
    <section
      className={`${themeColors.bgWidget} col-span-1 h-full max-h-[160px] self-center shadow-lg 
        rounded-lg p-6 flex flex-col justify-center 
        border ${themeColors.border}
         ${themeColors.text} `}
    >
      <div className="pb-1">
        <div className="flex justify-between">
          <p>Subtotal: </p>
          <p> {subtotal} kr</p>
        </div>
        <div className="flex justify-between">
          <p>Tax:</p>
          <p>{tax} kr</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-between font-semibold pt-1">
      <h3>Estimate Total: </h3>
      <h3>{totalPrice} kr</h3>
      </div>
      <button
        className="px-3 py-1 text-md font-semibold rounded
           bg-green-600 text-white hover:bg-green-700
            focus:ring-2 focus:ring-green-400 mt-2"
      >
        Checkout
      </button>
    </section>
  );
};

export default Checkout;
