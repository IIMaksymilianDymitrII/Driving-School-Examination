
const UpcommingEvent = () => {
  return (
          <div className="bg-white shadow-lg rounded-lg p-5 text-sm">
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Upcoming Events
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Mock driving test – every Saturday 10:00</li>
              <li>Christmas break: 23 Dec – 2 Jan</li>
              <li>Winter offer: 5x 2-hour lessons package</li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">
              Talk to your instructor to plan mock tests before your real
              driving exam.
            </p>
          </div>
  )
}

export default UpcommingEvent