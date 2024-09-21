import React from "react";
import Counter from "../_components/Counter";

async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);

  return (
    <div>
      {data.map((user, index) => {
        return <li key={index}>{user.name}</li>;
      })}

      <Counter />
    </div>
  );
}

export default Page;
