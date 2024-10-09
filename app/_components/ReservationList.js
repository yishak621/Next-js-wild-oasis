"use client";

import ReservationCard from "./ReservationCard";
import { startTransition, useOptimistic } from "react";

function ReservationList({ bookings }) {
  //[serverState,clientState]
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  ); //these hook runs for the things we hope that is going to be successfull , if not it returns to a normal state

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
