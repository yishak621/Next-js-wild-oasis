"use client";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { updateBooking } from "../_lib/actions";

function UpdateReservationForm({ id, numGuests, observations, maxCapacity }) {
  return (
    <form
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      action={updateBooking}
    >
      {/**easy way to transfer booking id to actions */}
      <input type="hidden" value={id} name="id" />
      <div className="space-y-2">
        <label htmlFor="numGuests">How many guests?</label>
        <select
          name="numGuests"
          id="numGuests"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultValue={numGuests}
          required
        >
          <option value="" key="">
            Select number of guests...
          </option>
          {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
            <option value={x} key={x}>
              {x} {x === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="observations">
          Anything we should know about your stay?
        </label>
        <textarea
          name="observations"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultValue={observations}
        />
      </div>

      {/* <Button /> */}
      <div className="flex justify-end items-center gap-6">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  //when using a form and using a form actions for updating
  const { pending } = useFormStatus(); //we can not use this hook inside the form componennt , that is why we have another separate component

  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
      type="submit"
    >
      {pending ? "Updating ..." : "  Update reservation"}
    </button>
  );
}
export default UpdateReservationForm;
