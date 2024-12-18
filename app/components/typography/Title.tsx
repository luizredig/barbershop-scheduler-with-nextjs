import { cn } from "@/app/lib/utils";

type TitleProps = {
  title: string;
  className?: string;
};

const Title = ({ title, className }: TitleProps) => {
  return (
    <>
      <span
        className={cn(
          "font-semibold uppercase text-muted-foreground",
          className,
        )}
      >
        {title}
      </span>
    </>
  );
};

export default Title;
