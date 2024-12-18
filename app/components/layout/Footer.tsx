import { Card } from "../ui/card";

const Footer = () => {
  return (
    <>
      <Card className="flex w-full rounded-none px-5 py-6">
        <span>
          © 2024 Copyright <strong>redig</strong> | Design by{" "}
          <strong>FSW Barber</strong>
        </span>
      </Card>
    </>
  );
};

export default Footer;
