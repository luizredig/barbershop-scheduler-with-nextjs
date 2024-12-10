import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const BarbershopSearch = () => {
  return (
    <>
      <div className="flex gap-2">
        <Input placeholder="Search for barbershops" />

        <Button size={"icon"}>
          <SearchIcon />
        </Button>
      </div>
    </>
  );
};

export default BarbershopSearch;
