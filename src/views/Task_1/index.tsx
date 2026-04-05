"use client";
import { useState, useEffect } from "react";

import isPresent from "@/utils/isPresent";

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

  const prevPage = () => () => {
    setPage(page - 1);
  };

  const nextPage = () => () => {
    if (isPresent(usersFromNextPage)) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
    )
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        console.log("response: ", response);
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error("Fetch error:", error));

    fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${page + 1}&_limit=${limit}`
    )
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
          {isPresent(users as UserProps[]) &&
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
          <button type="button" onClick={prevPage()} disabled={page <= 1}>
            {`<`}
          </button>
          <button type="button" disabled={true}>
            {page}
          </button>
          <button
            type="button"
            onClick={nextPage()}
            disabled={!isPresent(usersFromNextPage) || users.length < limit}
          >
            {`>`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task_1;
