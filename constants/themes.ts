interface ITheme {
  name: "تاریک" | "روشن";
  enName: "dark" | "light";
  style: string;
}

export const themes: ITheme[] = [
  {
    name: "تاریک",
    enName: "dark",
    style: "",
  },
  {
    name: "روشن",
    enName: "light",
    style: "",
  },
];
