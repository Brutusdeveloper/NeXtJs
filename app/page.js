// app/users/page.js
import Link from 'next/link';
import { Fragment } from 'react';

const UsersPage = async () => {
  // Fetching data from the API
  const response = await fetch("https://gorest.co.in/public/v2/users", {
    cache: "no-store", // This disables caching to ensure fresh data
  });

  // Check if the response is ok
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users = await response.json();

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <Fragment key={user.id}>
            <div style={{ display: "flex", gap: "20px", padding: "15px" }}>
              <li style={{ display: "flex", gap: "20px" }}>
                <span>{user.name}</span> <span>{user.email}</span>
              </li>
              <Link href={`/users/${user.id}`}>
                <button style={{ padding: "5px 20px" }}>Edit</button>
              </Link>
            </div>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
