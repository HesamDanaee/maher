import Cookies from "js-cookie";

// interface FetcherOptions {
//   method?: "GET" | "POST" | "PUT" | "DELETE";
//   body?: FormData | string;
// }

// const fetcher = async <T>(
//   url: string,
//   setUser: (data: T) => void,
//   options?: FetcherOptions
// ) => {
//   try {
//     const response = await fetch(url, {
//       method: options?.method || "POST",
//       body: options?.body,
//       headers: {
//         Connection: "keep-alive",
//         Accept: "*/*",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     setUser(data);
//     return data;
//   } catch (error) {
//     console.error("Error handling request:", error);
//     throw error;
//   }
// };

// export default fetcher;

interface Arg {
  arg: {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: FormData | string;
  };
}

export const sendReq = async (
  url: string,
  { arg }: { arg?: Arg["arg"] } = {}
) => {
  try {
    const token = Cookies.get("authToken");
    const response = await fetch(url, {
      method: arg?.method || "POST",
      body: arg?.body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error handling request:", error);
    throw error;
  }
};
