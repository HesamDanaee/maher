export async function Login() {
  const options = {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY ? process.env.DATA_API_KEY : "",
    },
  };
  const res = await fetch("", options);

  if (!res.status) throw new Error("Failed to fetch data");

  const data = await res.json();

  return Response.json({ data });
}

export async function Signup() {
  const options = {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY ? process.env.DATA_API_KEY : "",
    },
  };
  const res = await fetch("", options);

  const data = await res.json();

  return Response.json({ data });
}
