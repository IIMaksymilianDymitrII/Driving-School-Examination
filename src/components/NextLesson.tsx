import type { Lesson } from "../context/BookingContext"

const NextLesson = ({ todayNextLesson }: { todayNextLesson: Lesson | null }) => {

  return (
          <div className="bg-white shadow-lg rounded-lg p-5 text-sm">
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Today&apos;s Next Lesson
            </h3>
            {todayNextLesson ? (
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">Time:</span>{" "}
                  {todayNextLesson.time}
                </p>
                <p>
                  <span className="font-semibold">Instructor:</span>{" "}
                  {todayNextLesson.instructor}
                </p>
                <p>
                  <span className="font-semibold">Duration:</span>{" "}
                  {todayNextLesson.duration}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Be ready 5–10 minutes before start and bring your ID and
                  driving logbook.
                </p>
              </div>
            ) : (
              <p className="text-gray-600">No lesson booked today.</p>
            )}
          </div>
  )
}

export default NextLesson