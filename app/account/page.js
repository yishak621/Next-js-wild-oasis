import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Guest area",
};

function Page() {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome , Jonas
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
