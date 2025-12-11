import type { Lesson } from "../context/BookingContext"

const NextAvailableLesson = ({nextAvailableThisWeek}:{nextAvailableThisWeek:Lesson[]}) => {
  return (
          <div className="bg-white shadow-lg rounded-lg p-5 text-sm">
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Next Available Driving Slots
            </h3>
            {nextAvailableThisWeek.length > 0 ? (
              <ul className="space-y-2">
                {nextAvailableThisWeek.slice(0, 4).map((slot) => (
                  <li key={slot.id} className="flex justify-between">
                    <div>
                      <div className="font-semibold text-gray-800">
                        {slot.date} – {slot.time}
                      </div>
                      <div className="text-xs text-gray-600">
                        {slot.duration} with {slot.instructor}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">
                No free slots this week – check Classes page.
              </p>
            )}
          </div>
  )
}

export default NextAvailableLesson