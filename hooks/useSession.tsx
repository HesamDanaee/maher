import { useState } from "react";

interface Props {
  key: string;
}

function useSession<T>({ key }: Props) {
  const [local, setLocal] = useState<T | string>(() => {
    const item = sessionStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return "";
  });

  // Set the Item
  const setItem = (item: T) => {
    sessionStorage.setItem(key, JSON.stringify(item));
    setLocal(item);
  };

  return [local, setItem];
}

export default useSession;
