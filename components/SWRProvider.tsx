"use client";
import { ReactNode } from "react";
import { SWRConfig } from "swr";

import { useAuthStore } from "@/stores/authStore";

interface Props {
  children: ReactNode;
}

type Fetcher<Data = any> = (
  resource: string,
  init?: RequestInit
) => Promise<Data>;

type Mutator<Data = any> = (
  resource: string,
  method?: "GET" | "POST" | "PUT" | "DELETE",
  init?: RequestInit
) => Promise<Data>;

const SWRProvider = ({ children }: Props) => {
  const { token } = useAuthStore();

  const fetcher: Fetcher = async (resource, init) => {
    const headers = new Headers();

    headers.set("Content-Type", "application/json");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    const mergedInit: RequestInit = {
      ...init,
      headers: headers as HeadersInit,
    };

    const response = await fetch(resource, mergedInit);
    const data = await response.json();
    return data;
  };

  const mutator: Mutator = async (resource, method = "POST", init) => {
    const headers = new Headers();

    headers.set("Content-Type", "application/json");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    const mergedInit: RequestInit = {
      ...init,
      method,
      headers: headers as HeadersInit,
    };

    const response = await fetch(resource, mergedInit);
    const data = await response.json();
    return data;
  };

  const fetchSwrConfig = {
    // refreshInterval: 3000,
    fetcher,
  };
  return <SWRConfig value={{ ...fetchSwrConfig }}>{children}</SWRConfig>;
};

export default SWRProvider;
