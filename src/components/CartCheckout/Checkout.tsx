import { useTheme } from "../../context/ThemeContext"
const Checkout = () => {
    const {themeColors} = useTheme()
  return (
        <section 
          className={`${themeColors.bgWidget} col-span-1 h-full max-h-[160px] self-center shadow-lg 
        rounded-lg p-6 flex flex-col justify-center 
        border ${themeColors.border}
         ${themeColors.text} `}>
            <div className="pb-1">
                <p>Subtotal: </p>
                <p>Tax: </p>
            </div>
            <hr />
                <h3 className="font-semibold pt-1">Estimate Total: </h3>
          <button className="px-3 py-1 text-md font-semibold rounded
           bg-green-600 text-white hover:bg-green-700
            focus:ring-2 focus:ring-green-400 mt-2">Checkout</button>
        </section>
  )
}

export default Checkout