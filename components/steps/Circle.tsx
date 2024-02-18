interface Props {
  stepCount: number;
  size: "small" | "medium" | "large";
  bg: "primary" | "secondary" | "accent";
}
const Circle = ({ stepCount, bg, size }: Props) => {
  return (
    <div
      className={`flex justify-center items-center hover:bg-accent transition duration-200 ease-out font-semibold ${
        size === "small"
          ? "w-[30px] text-sm"
          : size === "medium"
          ? "w-[50px] text-lg"
          : "w-[70px] text-xl"
      } ${
        size === "small"
          ? "h-[30px]"
          : size === "medium"
          ? "h-[50px]"
          : "h-[70px]"
      } rounded-full ${
        bg === "primary"
          ? "bg-primary text-secondary"
          : bg === "secondary"
          ? "bg-secondary text-primary"
          : "bg-accent text-primary"
      } `}
    >
      {stepCount}
    </div>
  );
};

export default Circle;
