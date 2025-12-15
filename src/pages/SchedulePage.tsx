import Header from "../common/Header"
import { useTheme } from "../context/ThemeContext";
const SchedulePage = () => {
  const { themeColors } = useTheme();
  return (
    <main className={`min-h-screen ${themeColors.bg}`}>

    </main>
  )
}

export default SchedulePage