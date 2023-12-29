import useSWR from "swr";

const fetchData = (url: string) => fetch(url).then((res) => res.json());

export function useGetPosts(id?: string) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id ? id : ""}`;
  const { data, error, isLoading } = useSWR(url, fetchData);

  return {
    posts: data,
    isLoading,
    isError: error,
  };
}
