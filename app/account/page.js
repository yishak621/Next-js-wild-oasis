import Link from "next/link";
import React from "react";
import { auth } from "../_lib/auth";
import { getBookings } from "../_lib/data-service";
import ReservationCard from "../_components/ReservationCard";

export const metadata = {
  title: "Guest area",
};

async function Page() {
  const { user } = await auth();
  const bookings = await getBookings(user?.guestId);

  const firstName = user;
  return (
    <div className=" pl-7">
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome , {firstName}
      </h2>
      {!bookings ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <Link className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Page;
