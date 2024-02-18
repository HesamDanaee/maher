"use client";
import { themes } from "@/constants/themes";
import { v4 as uuid } from "uuid";
import useThemeStore from "@/stores/themeStore";
import Button from "@/components/common/Button";

const Theme = () => {
  const { changeTheme } = useThemeStore();
  return (
    <div className="w-full h-full">
      <ul className="w-full py-2 flex justify-evenly">
        {themes.map((theme) => (
          <li key={uuid()} className="">
            <Button
              onClick={() => changeTheme(theme.enName)}
              size="sm"
              type="button"
              color="accent"
            >
              {theme.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Theme;
