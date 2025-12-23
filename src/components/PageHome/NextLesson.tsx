import type { Lesson } from "../../Context/BookingContext"
import { useTheme } from "../../Context/ThemeContext";

const NextLesson = ({ todayNextLesson }: { todayNextLesson: Lesson | null }) => {
  const { themeColors } = useTheme();

  return (
          <div
  className={`${themeColors.bgWidget} shadow-lg rounded-lg p-5 text-sm ${themeColors.text} ${themeColors.border} border`}
>

            <h3 className={`text-base font-semibold mb-3 ${themeColors.text}`}>
              Today&apos;s Next Lesson
            </h3>
            {todayNextLesson ? (
              <div className={`space-y-1 ${themeColors.text}`}>
                <p>
                  <span className={`font-semibold ${themeColors.text}`}>Time:</span>{" "}
                  {todayNextLesson.time}
                </p>
                <p>
                  <span className={`font-semibold ${themeColors.text}`}>Instructor:</span>{" "}
                  {todayNextLesson.instructor}
                </p>
                <p>
                  <span className={`font-semibold ${themeColors.text}`}>Duration:</span>{" "}
                  {todayNextLesson.duration}
                </p>
                <p className={`text-xs mt-2 ${themeColors.text}`}>
                  Be ready 5–10 minutes before start and bring your ID and
                  driving logbook.
                </p>
              </div>
            ) : (
              <p className={`${themeColors.text} opacity-60`}>No lesson booked today.</p>

            )}
          </div>
  )
}

export default NextLesson;