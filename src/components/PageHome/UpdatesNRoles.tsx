
import { useTheme } from "../../Context/ThemeContext";

const UpdatesNRoles = () => {
  const { themeColors } = useTheme();
  return (
        <section className={` ${themeColors.bgWidget} shadow rounded-lg p-6 ${themeColors.text} ${themeColors.border} border`}>
          <h2 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
            Driving Rules & Updates
          </h2>

          <ul className={`space-y-2 text-sm ${themeColors.text}`}>
            <li>
              • New rule: Use of mobile phone must be strictly hands-free while
              driving.
            </li>
            <li>• Updated speed enforcement cameras on motorways.</li>
            <li>
              • Winter tire requirement extended until April in some regions.
            </li>
          </ul>

          <h3 className={`text-md font-semibold mt-4 mb-2 ${themeColors.text}`}>Important Links</h3>

          <ul className="text-blue-600 dark:text-blue-400 text-sm space-y-1">
            <li>
              <a
                href="https://transportstyrelsen.se"
                target="_blank"
                className="underline"
              >
                Apply for Handledare (supervisor) course – Transportstyrelsen
              </a>
            </li>
            <li>
              <a
                href="https://trafikverket.se"
                target="_blank"
                className="underline"
              >
                Book Driving Test (Körprov) – Trafikverket
              </a>
            </li>
            <li>
              <a
                href="https://korkortsportalen.se"
                target="_blank"
                className="underline"
              >
                Driving License Portal – Körkortsportalen
              </a>
            </li>
          </ul>
        </section>
  )
}

export default UpdatesNRoles