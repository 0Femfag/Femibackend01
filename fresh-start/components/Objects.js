"use client";
import React, { useState, useEffect } from "react";

const Objects = () => {
  const [info, setInfo] = useState({
    name: "Oluwafemi",
    email: "Femimane1@gmail.com",
    gender: "Male",
  });
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    alert("are you sure you want to submit");
  }, [submitting]);

  //   function to modify users information
  const modifyUser = (e, key) => {
    setInfo({ ...info, [`${key}`]: e.target.value });
  };
  //   const [name, setName] = useState("Femi");
  //   const [email, setEmail] = useState("Femimane1@gmail.com");
  //   const [gender, seGender] = useState("Male");
  return (
    <div className="todo-container ">
      <input value={info.name} onChange={(e) => modifyUser(e, "name")} />
      <input value={info.email} onChange={(e) => modifyUser(e, "email")} />
      <input value={info.gender} onChange={(e) => modifyUser(e, "gender")} />
      <p>{`${info.name}, ${info.gender}, ${info.email}`}</p>
      <button onClick={() => setSubmitting(true)}>Submit</button>
    </div>
  );
};

export default Objects;

//   <input value={info.name} readOnly />
// <input value={info.email} readOnly />
// <input value={info.gender} readOnly />

{
  /* <input defaultValue={info.name} onChange={() => ""} />
      <input defaultValue={info.email} onChange={() => ""} />
      <input defaultValue={info.gender} onChange={() => ""} /> */
}
