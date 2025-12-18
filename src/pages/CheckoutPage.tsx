import { useTheme } from "../context/ThemeContext";

const CheckoutPage = () => {
  const { themeColors } = useTheme();

  return (
    <main className={`min-h-screen ${themeColors.text} `}>
      <section>
        <div></div>
        <div>
          <p>Public Security Number</p>
          <input />
          <p>Email Address</p>
          <input />
          <p>Name</p>
          <input />
          <p>Lastname</p>
          <input />
          <p>Phone Number</p>
          <input />
        </div>
        <button className="">Next</button>
      </section>
      <section>
            
      </section>
    </main>
  );
};

export default CheckoutPage;
