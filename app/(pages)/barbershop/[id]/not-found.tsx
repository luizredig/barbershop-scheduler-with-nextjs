"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "../../../components/ui/button";

const NotFoundPage = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        <span>Esta barbearia não foi encontrada.</span>

        <Button onClick={handleGoBack}>
          <ChevronLeft />
          Voltar
        </Button>
      </div>
    </>
  );
};

export default NotFoundPage;
