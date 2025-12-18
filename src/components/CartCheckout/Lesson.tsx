import { useTheme } from "../../context/ThemeContext";
const Lesson = () => {
  const { themeColors } = useTheme();
  return (
          <li className={`flex justify-between 
             ${themeColors.bgWidget} shadow-lg border ${themeColors.border} 
        rounded-lg p-6 flex -col justify-center 
            p-5
            `}>
            <div>
              <h2 className="text-xl font-semibold pb-2 ">
                Title type of drive
              </h2>
              <div className={`${themeColors.textMuted}`}>
              <p>date and time</p>
              <p>instructor</p>
              <p>location</p>
              </div>
            </div>
            <div className="grid grid-row-2 content-between ">
              <p className="">Price</p>
              <button className={`hover:text-gray-400`}>Remove</button>
            </div>
          </li>
  )
}

export default Lesson