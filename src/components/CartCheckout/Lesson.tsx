import { useTheme } from "../../context/ThemeContext";

interface LessonProps {
  id: string;
  title: string;
  date: string;
  time: string;
  instructor: string;
  location?: string;
  price: number
  remove: (id: string) => void ;
}

const Lesson = ({
  id,
  title,
  date,
  time,
  instructor,
  location,
  price,
  remove,
}: LessonProps) => {
  const { themeColors } = useTheme();
  return (
    <li
      className={`flex justify-between 
             ${themeColors.bgWidget} shadow-lg border ${themeColors.border} 
        rounded-lg p-6 flex -col justify-center 
            p-5
            `}
    >
      <div>
        <h2 className="text-xl font-semibold pb-2 ">{title}</h2>
        <div className={`${themeColors.textMuted}`}>
          <p>Instructor: {instructor}</p>
          <p>Location: {location}</p>
          <p>Time: {time} </p>
          <p>Date: {date}</p>
        </div>
      </div>
      <div className="grid grid-row-2 content-between ">
        <p className="font-semibold">{price} kr</p>
        <button onClick={() => remove(id)} className={`hover:text-gray-400`}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default Lesson;
