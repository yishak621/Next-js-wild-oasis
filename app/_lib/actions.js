"use server"; //thiis is a declaration for a server actions not a server component

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { getBookings, updateGuest } from "./data-service";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

// the native formdata API will transfer the data to here -DONT FORGET TO GIVE THEM A NAME
export async function updateProfile(formData) {
  //formdata is a web api that also works in a web browser
  const session = await auth();
  if (!session) throw new Error("you must be logged in");
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  //check if the character is between 6 to 12 characters
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  //create a new object
  const updateData = { nationality, countryFlag, nationalID };

  const data = await updateGuest(session.user.guestId, updateData);
  if (data) revalidatePath("/account/profile");
}

export async function updateBooking(formData) {
  const numGuests = formData.get("numGuests");
  const id = Number(formData.get("id"));
  const observations = formData.get("observations").slice(0, 1000); //limit the character
  //authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  //authorization
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(id))
    throw new Error("You are not allowed to delete this booking");

  const updatedFields = { numGuests, observations };
  //id is the booking id //MUTATION
  const { data, error } = await supabase
    .from("Bookings")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();
  //ERROR HANDLING
  if (error) throw new Error("Booking could not be updated");
  //REDIRECTING
  revalidatePath(`/account/reservations/edit/${id}`);

  redirect("/account/reservations");
}

export async function signInAction() {
  //the first argument is the provider [if we have like a diffrent providers we r gonna have to loop over them ]
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  //to prevent hacker delation
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");

  const { error } = await supabase
    .from("Bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted");
  revalidatePath("/account/reservations");
}
