import UpdateReservationForm from "@/app/_components/UpdateReservationForm";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { numGuests, observations, cabinId } = await getBooking(params.id);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{params.id}
      </h2>

      <UpdateReservationForm
        id={params.id}
        numGuests={numGuests}
        observations={observations}
        maxCapacity={maxCapacity}
      />
    </div>
  );
}
