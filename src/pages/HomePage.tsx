import { useBooking } from "../context/BookingContext";
import { useTheme } from "../context/ThemeContext";
import WeatherForcast from "../components/Homepage/WeatherForcast";
import DrivingQuote from "../components/Homepage/DrivingQuote";
import UpdatesNRoles from "../components/Homepage/UpdatesNRoles";
import NextLesson from "../components/Homepage/NextLesson";
import UpcommingEvent from "../components/Homepage/UpcommingEvent";
import NextAvailableLesson from "../components/Homepage/NextAvailableLesson";

const HomePage: React.FC = () => {
  const { todayNextLesson, nextAvailableThisWeek } = useBooking();
  const { themeColors } = useTheme();
  return (
    <main className={`min-h-screen ${themeColors.bg}`}>
      <div className={`max-w-5xl mx-auto px-4 py-6 space-y-6 ${themeColors.text}`}>
        <section className={`grid md:grid-cols-3 gap-6 animate-[slideIn_0.3s_ease-out] ${themeColors.text}`}>
          <DrivingQuote />
          <WeatherForcast />
        </section>
        <UpdatesNRoles />
        <section className={`grid md:grid-cols-3 gap-6 animate-[slideIn_0.3s_ease-out] ${themeColors.text}`}>
          <NextLesson todayNextLesson={todayNextLesson}/>
          <UpcommingEvent  />
          <NextAvailableLesson nextAvailableThisWeek={nextAvailableThisWeek} />
        </section>
      </div>
    </main>
  );
};

export default HomePage;
