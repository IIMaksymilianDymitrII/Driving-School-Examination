import { useTheme } from "../context/ThemeContext";
import Lesson from "../components/CartCheckout/Lesson";
import Checkout from "../components/CartCheckout/Checkout";
// className={``}
const CartPage = () => {
  const { themeColors } = useTheme();
  return (
    <main className={`min-h-screen ${themeColors.text} `}>
      <section className="">
        <div className={`p-3 flex justify-center items-center `}>
          <h1 className="text-3xl font-semibold p-10">Your Shopping Cart</h1>
        </div>
      </section>
      <section
        className={`max-w-5xl mx-auto grid md:grid-cols-3 gap-6 
        animate-[slideIn_0.3_ease-out] `}
      >
        <section 
          className={`md:col-span-2 max-h-[700px] overflow-y-auto`}>
        <ul className="grid gap-3"
        >
          <Lesson/>
        </ul>
        </section>
        <Checkout/>
      </section>
    </main>
  );
};

export default CartPage;
