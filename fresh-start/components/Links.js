// "use client";

import Link from "next/link";
import React from "react";

const Links = () => {
  return (
    <>
      <div style={{ display: "flex", gap: 20 }}>
        <Link href="/contact-us">contact-us</Link>
        <Link href="/about-us">about-us</Link>
        <Link href="/enquiries">enquiries</Link>
      </div>
    </>
  );
};

export default Links;

{
  /* <button onClick={() => router.push("/enquiries")}>enquiries</button> */
}

// import { useRouter } from "next/navigation";

// const router = useRouter();
//   const pageNav = (link) => {
//     router.push(link);
//   };

{
  /* <div style={{ display: "flex", gap: 20 }}>
  <button onClick={() => pageNav("/contact-us")}>contact-us</button>
  <button onClick={() => pageNav("/about-us")}>about-us</button>
  <button onClick={() => pageNav("/enquiries")}>enquiries</button>
  <button onClick={() => pageNav("/user/67a73cafe8eb72668cfa464e")}>
    dynamic page
  </button>
  <button onClick={() => pageNav("https://google.com/")}>google</button>
</div>; */
}
