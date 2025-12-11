import React, { useEffect, useState } from "react";
import { useBooking } from "../context/BookingContext";

interface WeatherData {
  temperature: number;
  windspeed: number;
  weathercode: number;
}

const HomePage: React.FC = () => {
  const { todayNextLesson, nextAvailableThisWeek } = useBooking();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherMessage, setWeatherMessage] = useState<string>("Loading weather...");

  useEffect(() => {
    // Stockholm coordinates
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=59.33&longitude=18.06&current_weather=true"
    )
      .then((res) => res.json())
      .then((data) => {
        const w = data.current_weather;
        const parsed: WeatherData = {
          temperature: w.temperature,
          windspeed: w.windspeed,
          weathercode: w.weathercode,
        };
        setWeather(parsed);

        // very simple tips based on temp & wind
        let msg = `Current temp: ${parsed.temperature}°C, wind ${parsed.windspeed} m/s. `;
        if (parsed.temperature <= 0) {
          msg += "Roads may be icy – increase following distance and brake gently.";
        } else if (parsed.windspeed > 10) {
          msg += "It is quite windy – keep both hands on the steering wheel.";
        } else {
          msg += "Nice conditions for practice – focus on smooth steering and scanning traffic.";
        }
        setWeatherMessage(msg);
      })
      .catch(() => setWeatherMessage("Could not load weather. Drive carefully and adjust speed."));
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">

        {/* Section 1 */}
        <section className="grid md:grid-cols-3 gap-6 animate-[slideIn_0.3s_ease-out]">
          {/* Left column: Driving quote */}
          <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center">
            <h1 className="text-4xl font-semibold text-gray-900 mb-3">
              Build real confidence behind the wheel
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Private driving practice is where students repeat, make mistakes and improve
              – in their own tempo. My role is to guide you with structured lessons,
              clear feedback and realistic mock tests so that every kilometer you drive
              takes you closer to a safe and confident driving licence.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Together we plan lessons, book the right times and focus on exactly what
              you need – from basic control to complicated city traffic.
            </p>
          </div>

          {/* Right column: weather update */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between text-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Weather & Driving Tip</h2>
            <div className="text-5xl font-bold text-blue-700">
                {weather?.temperature}°C
            </div>

            <div className="text-lg text-gray-600 dark:text-gray-300">
                Wind: {weather?.windspeed} m/s  
                <br />
                <div className="text-lg text-red-600 dark:text-gray-300"> 
                  <p>
                      Tips: {weatherMessage}
                  </p>
                  </div>
                

            </div>

            
            <br />
            <p className="text-xs text-gray-500">
              Weather data: Stockholm, live from Open-Meteo. Always adapt speed and distance
              to road conditions.
            </p>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-3">Driving Rules & Updates</h2>

          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• New rule: Use of mobile phone must be strictly hands-free while driving.</li>
            <li>• Updated speed enforcement cameras on motorways.</li>
            <li>• Winter tire requirement extended until April in some regions.</li>
          </ul>

          <h3 className="text-md font-semibold mt-4 mb-2">Important Links</h3>

          <ul className="text-blue-600 dark:text-blue-400 text-sm space-y-1">
            <li>
              <a href="https://transportstyrelsen.se" target="_blank" className="underline">
                Apply for Handledare (supervisor) course – Transportstyrelsen
              </a>
            </li>
            <li>
              <a href="https://trafikverket.se" target="_blank" className="underline">
                Book Driving Test (Körprov) – Trafikverket
              </a>
            </li>
            <li>
              <a href="https://korkortsportalen.se" target="_blank" className="underline">
                Driving License Portal – Körkortsportalen
              </a>
            </li>
          </ul>
        </section>


        {/* Section 2 */}
        <section className="grid md:grid-cols-3 gap-6 animate-[slideIn_0.3s_ease-out]">
          {/* Today's next lesson */}
          <div className="bg-white shadow-lg rounded-lg p-5 text-sm">
            <h3 className="text-base font-semibold text-gray-900 mb-3">Today&apos;s Next Lesson</h3>
            {todayNextLesson ? (
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">Time:</span> {todayNextLesson.time}
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
                  Be ready 5–10 minutes before start and bring your ID and driving logbook.
                </p>
              </div>
            ) : (
              <p className="text-gray-600">No lesson booked today.</p>
            )}
          </div>

          {/* Upcoming events */}
          <div className="bg-white shadow-lg rounded-lg p-5 text-sm">
            <h3 className="text-base font-semibold text-gray-900 mb-3">Upcoming Events</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Mock driving test – every Saturday 10:00</li>
              <li>Christmas break: 23 Dec – 2 Jan</li>
              <li>Winter offer: 5x 2-hour lessons package</li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">
              Talk to your instructor to plan mock tests before your real driving exam.
            </p>
          </div>

          {/* Next available slots */}
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
              <p className="text-gray-600">No free slots this week – check Classes page.</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;