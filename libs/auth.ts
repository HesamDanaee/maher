// import fetcher from "@/utils/network";

// import { generateFormData } from "@/utils/common";
// import API_URLS from "@/configs/apiConfig";

// export async function loginUser(
//   data: { [key: string]: string },
//   handleLogin: (data: LoginRes) => void
// ) {
//   try {
//     const formData = generateFormData(data);
//     const response = await fetcher(API_URLS.login, handleLogin, {
//       body: formData,
//     });
//     if (response) return response;
//   } catch (err) {
//     console.error("Error handling login request:", err);
//     throw err;
//   }
// }

// export async function signupUser(
//   data: { [key: string]: string },
//   handleSignUp: (data: LoginRes) => void
// ) {
//   try {
//     const formData = generateFormData(data);
//     const response = await fetcher(API_URLS.signup, handleSignUp, {
//       body: formData,
//     });
//     if (response) return response;
//   } catch (err) {
//     console.error("Error handling login request:", err);
//     throw err;
//   }
// }
