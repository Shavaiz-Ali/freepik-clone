import OpenAI from "openai";

import { auth } from "@/db";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const fetchAllResources = async () => {
  const response = await fetch(`https://api.freepik.com/v1/resources`, {
    method: "GET",
    headers: {
      "Accept-Language": "<accept-language>",
      "x-freepik-api-key": `${process.env.FREEPIK_API_KEY}`,
    },
  });
  return await response.json();
};

// export const fetchByQuery = async (query?: string) => {
//   // Check for empty or invalid query
//   if (!query || query.length === 0) {
//     return { message: "Please provide a valid search query." }; // Informative error message
//   }

//   // Encode the query string to handle special characters
//   const encodedQuery = encodeURIComponent(query);

//   const response = await fetch(
//     `https://api.freepik.com/v1/resources/search?query=${encodedQuery}&type=photo`,
//     {
//       method: "GET",
//       headers: {
//         "Accept-Language": "en-US",
//         "x-freepik-api-key": `${process.env.FREEPIK_API_KEY}`,
//       },
//     }
//   );

//   return await response.json();
// };

// ------------------ authentication actions -------------------- //

// signup action  //

export const signup = async (email: string, password: string) => {
  console.log(email, password);
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return {
      success: true,
      message: "User created successfully!",
      user: response.user,
      status: 201,
    };
  } catch (error) {
    console.log(error);
  }
};

//======================== OPENAI API IMAGE GENRATION API=======================//

export const generateImagesByPrompt = async (
  // {
  prompt:string
  // pathToRevalidate,
// }: {
//   prompt: string;
//   pathToRevalidate?: string;
// }
) => {
  console.log(prompt)
  if (!prompt)
    return {
      success: false,
      message: "Please provide a valid prompt and path to revalidate.",
    };
  // api
  const url = "https://ai-image-generator3.p.rapidapi.com/generate";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "x-rapidapi-key": "c12f85e2f8msh5cca653a58d801fp15981ejsn9271b771e623",
        "x-rapidapi-host": "ai-image-generator3.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `${prompt}`,
        num_images: 1,
      }),
    });

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
//======================== OPENAI API IMAGE GENRATION API=======================//
