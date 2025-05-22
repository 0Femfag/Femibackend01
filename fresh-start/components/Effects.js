"use client";
import React, { useState, useEffect } from "react";

const Effects = () => {
  const [allUser, setAlluser] = useState([]);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const result = await response.json();
      setAlluser(result);
      setLoading(false);
    };
    fetchUser();
  }, [pages]);
  console.log(allUser);
  return (
    <div>
      <p>{pages}</p>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {allUser?.map((user, index) => (
            <div key={index}>
              <p>{user?.name}</p>
              <p>{user?.gender}</p>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() =>
          setPages((prev) => {
            return prev + 1;
          })
        }
      >
        get next page
      </button>
    </div>
  );
};

export default Effects;

// setLoading(true);
// // making ajax request
// const theUser = [
//   { name: "Oluwafemi", gender: "Male" },
//   { name: "David", gender: "Male" },
//   { name: "Michael", gender: "Male" },
// ];
// setAlluser(theUser);
// setLoading(false);
