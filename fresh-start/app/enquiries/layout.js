import EnquireLinks from "@/components/EnquireLinks";
import React from "react";

export default function EnquiriesLayout({ children }) {
  return (
    <div>
      {" "}
      <EnquireLinks />
      {children}{" "}
    </div>
  );
}
