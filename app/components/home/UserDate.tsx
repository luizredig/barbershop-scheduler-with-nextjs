import { capitalize } from "@/app/helpers/formatString";
import React from "react";

const UserDate = () => {
  const today = new Date();
  let formattedDate = today.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  formattedDate = formattedDate.replace("-feira", "");

  return (
    <div className="flex flex-col gap-1">
      <span className="text-2xl">Olá!</span>

      <span className="text-md">{capitalize(formattedDate)}</span>
    </div>
  );
};

export default UserDate;
