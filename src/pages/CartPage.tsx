import { useTheme } from "../context/ThemeContext";
// className={``}
const CartPage = () => {
  const { themeColors } = useTheme();
  return (
    <main className={`min-h-screen ${themeColors.text} `}>
      <section className="">
        <div className={`p-3 flex justify-center items-center `}>
          <h1 className="text-3xl font-semibold ">My Cart</h1>
        </div>
      </section>
      <section
        className={`max-w-5xl mx-auto grid md:grid-cols-3 gap-6 
        animate-[slideIn_0.3_ease-out] `}
      >
        <section 
          className={`md:col-span-2 ${themeColors.bgWidget} shadow-lg 
        rounded-lg p-6 flex flex-col justify-center 
         ${themeColors.text} `}>
        <ul
        >
          <li className="flex justify-between">
            <div>
              <h2 className="text-xl font-semibold pb-2 ">
                Title type of drive
              </h2>
              <div className={`${themeColors.textMuted}`}>
              <p >date and time</p>
              <p>Instructor</p>
              <p>location</p>
              </div>
            </div>
            <div>
              <p>Price</p>
              <button>Remove</button>
            </div>
          </li>
          {
            //list of items
          }
        </ul>
        </section>
        <section 
          className={`${themeColors.bgWidget} col-span-1 shadow-lg 
        rounded-lg p-6 flex flex-col justify-center 
         ${themeColors.text} `}>
            <div>
                <p>Subtotal: </p>
                <p>Tax: </p>
                <h3>Estimate Total: </h3>
            </div>
          <button className="px-3 py-1 text-xs rounded
           bg-green-600 text-white hover:bg-green-700
            focus:ring-2 focus:ring-green-400 mt-2">Checkout</button>
        </section>
      </section>
    </main>
  );
};

export default CartPage;
