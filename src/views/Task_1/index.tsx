"use client";
import { useState, useEffect } from "react";

type UserProps = {
  id: string;
  name: string;
  email: string;
};

const Task_1 = () => {
  const limit = 3;
  const [users, setUsers] = useState<UserProps[]>([]);
  const [usersFromNextPage, setUsersFromNextPage] = useState<UserProps[]>([]);
  const [page, setPage] = useState<number>(limit);
  const baseUrl = "https://jsonplaceholder.typicode.com/users";

  const newPage = (page: number) => () => {
    setPage(page);
  };

  useEffect(() => {
    // current page
    fetch(`${baseUrl}?_page=${page}&_limit=${limit}`)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error("Fetch error:", error));

    // next page
    fetch(`${baseUrl}?_page=${page + 1}&_limit=${limit}`)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => setUsersFromNextPage(data))
      .catch((error) => console.error("Fetch error:", error));
  }, [page]);

  return (
    <div className="page__content">
      <h1>Task 1</h1>
      <div>
        <ul style={{ marginBottom: "20px" }}>
          {users.length > 0 &&
            users.map(({ id, name, email }: UserProps) => (
              <li key={id}>
                {name} - {email}
              </li>
            ))}
        </ul>
        <div
          className="pagination"
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            type="button"
            onClick={newPage(page - 1)}
            disabled={page <= 1}
          >
            {`<`}
          </button>
          <button type="button" disabled>
            {page}
          </button>
          <button
            type="button"
            onClick={newPage(page + 1)}
            disabled={usersFromNextPage.length === 0 || users.length < limit}
          >
            {`>`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task_1;
