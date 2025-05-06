import Link from "next/link";
import React from "react";

const EnquireLinks = () => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Link href={"enquiries/electronics"}>Electronics</Link>
      <Link href={"medicals"}>Medicals</Link>
    </div>
  );
};

export default EnquireLinks;
