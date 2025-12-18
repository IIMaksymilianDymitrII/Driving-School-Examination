import { useTheme } from "../context/ThemeContext";
import { useBooking } from "../context/BookingContext";
import ShoppingCart from "../components/CartCheckout/ShoppingCart";

const CartPage = () => {
  const { cart} = useBooking();
  const { themeColors } = useTheme();

  return (
    <main className={`min-h-screen ${themeColors.text} `}>
      <section className="">
        <div className={`p-3 flex justify-center items-center `}>
          <h1 className="text-3xl font-semibold p-10">Your Shopping Cart</h1>
        </div>
      </section>
      {cart.length === 0 ? <p className="flex justify-center items-center text-4xl h-[500px]">Your Cart is Empty</p> : <ShoppingCart />}
    </main>
  );
};

export default CartPage;
