import { capitalize } from "@/app/helpers/formatString";
import React from "react";

const UserDate = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="flex flex-col gap-1">
      <span className="text-2xl">Hello!</span>
      <span className="text-md">{capitalize(formattedDate)}</span>
    </div>
  );
};

export default UserDate;
