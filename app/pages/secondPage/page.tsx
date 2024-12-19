import React from "react";

interface User {
  id: number;
  name: string;
}

const SecondPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 }, /* fetches data every 10 seconds - only in fetch and not exios or... */
  });
  const users: User[] = await res.json();

  return (
    <div>
      Hello everynyan! Welcome to second page
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SecondPage;
