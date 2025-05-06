"use client";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";

const Dynamic = () => {
  const { id } = useParams();
  const query = useSearchParams();
  return (
    <div>
      <p>the user id is: {id}</p>
      <p>the user email: {query.get("email")}</p>
      <p>the age: {query.get("age")} </p>
    </div>
  );
};

export default Dynamic;

// http://localhost:3000/user/67a73cafe8eb72668c3fa464e?email=femimane1@gmail.com&age=28
