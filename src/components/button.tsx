import { Button } from "@material-tailwind/react";

const button = ({ text }: { text: string }) => {
  return (
    <Button
      placeholder=""
      className="w-full text-lg font-semibold bg-secondary rounded-[20px] text-white"
    >
      {text}
    </Button>
  );
};

export default button;
