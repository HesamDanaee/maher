interface Props {
  direction: "horizontal" | "vertical";
  size: "small" | "medium" | "large";
  bg: "primary" | "secondary";
}

const Line = ({ direction, size, bg }: Props) => {
  const stylesVertcal = `w-[2px] ${
    size === "small"
      ? "h-[70px]"
      : size === "medium"
      ? "h-[100px]"
      : "h-[120px]"
  }  ${bg === "primary" ? "bg-primary" : "bg-secondary"}`;

  const stylesHorizontal = `h-1 w-[${
    size === "small" ? "10px" : size === "medium" ? "20px" : "30px"
  } ]  ${bg === "primary" ? "bg-primary" : "bg-secondary"}`;

  return (
    <div
      className={direction === "vertical" ? stylesVertcal : stylesHorizontal}
    ></div>
  );
};

export default Line;
