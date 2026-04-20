import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import IsLoginForReservation from "./IsLoginForReservation";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-[3fr_4fr] border border-primary-800 min-h-100">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      <IsLoginForReservation cabin={cabin} />
    </div>
  );
}

export default Reservation;
