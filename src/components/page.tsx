import { Button } from "@material-tailwind/react";

const Page = ({ index }: { index: string }) => {
  return (
    <Button
      placeholder=""
      className="px-3 py-1 bg-primary rounded-[10px] cursor-pointer text-black text-[17px] font-bold"
    >
      {index}
    </Button>
  );
};

export default Page;
