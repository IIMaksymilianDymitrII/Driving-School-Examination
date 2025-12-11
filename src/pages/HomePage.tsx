import { useBooking } from "../context/BookingContext";
import WeatherForcast from "../components/WeatherForcast";
import DrivingQuote from "../components/DrivingQuote";
import UpdatesNRoles from "../components/UpdatesNRoles";
import NextLesson from "../components/NextLesson";
import UpcommingEvent from "../components/UpcommingEvent";
import NextAvailableLesson from "../components/NextAvailableLesson";

const HomePage: React.FC = () => {
  const { todayNextLesson, nextAvailableThisWeek } = useBooking();
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        <section className="grid md:grid-cols-3 gap-6 animate-[slideIn_0.3s_ease-out]">
          <DrivingQuote />
          <WeatherForcast />
        </section>
        <UpdatesNRoles />
        <section className="grid md:grid-cols-3 gap-6 animate-[slideIn_0.3s_ease-out]">
          <NextLesson todayNextLesson={todayNextLesson}/>
          <UpcommingEvent  />
          <NextAvailableLesson nextAvailableThisWeek={nextAvailableThisWeek} />
        </section>
      </div>
    </main>
  );
};

export default HomePage;
