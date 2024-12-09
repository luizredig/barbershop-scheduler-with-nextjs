import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const Header = () => {
  return (
    <>
      <Card className="flex h-20 max-h-20 min-h-20 w-full items-center justify-between rounded-none border-x-0 border-t-0 bg-background p-0 px-5 shadow-none">
        <Image
          src={"/logo.svg"}
          alt={"FSW Barber"}
          width={0}
          height={0}
          className="h-5 w-auto"
        />

        <Button size={"icon"} variant={"outline"}>
          <MenuIcon />
        </Button>
      </Card>
    </>
  );
};

export default Header;
