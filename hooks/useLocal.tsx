"use client";
import { useState } from "react";

interface Props {
  key: string;
}

function useLocal<T>({ key }: Props) {
  const [local, setLocal] = useState<T | string>(() => {
    const item = global.window !== undefined && localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return "";
  });

  // Set the Item
  const setItem = (item: T) => {
    localStorage.setItem(key, JSON.stringify(item));
    setLocal(item);
  };

  return [local, setItem];
}

export default useLocal;
