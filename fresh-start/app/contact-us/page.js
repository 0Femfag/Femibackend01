import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href={"enquiries/medicals"}>go to medicals</Link>
      <p>Welcome to contact us page</p>
    </div>
  );
};

export default page;
