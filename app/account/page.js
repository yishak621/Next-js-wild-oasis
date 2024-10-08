import Link from "next/link";
import React from "react";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

async function Page() {
  const { user } = await auth();
  const firstName = user.name.split(" ").at(0);
  return (
    <div className=" pl-7">
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome , {firstName}
      </h2>
      <p className="text-lg">
        You have no reservations yet. Check out our{" "}
        <Link className="underline text-accent-500" href="/cabins">
          luxury cabins &rarr;
        </Link>
      </p>
    </div>
  );
}

export default Page;
