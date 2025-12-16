interface Props {
  value: string;
  onChange: (v: string) => void;
}

const ScheduleSearch: React.FC<Props> = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search by class or instructor..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full p-2 mb-4 rounded border dark:bg-gray-800 dark:text-white"
  />
);

export default ScheduleSearch;

