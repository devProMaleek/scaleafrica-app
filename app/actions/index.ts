"use server";

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PRODUCTION_API_BASE_URL : process.env.NEXT_PUBLIC_DEVELOPMENT_API_BASE_URL;

export async function getHomePageData() {
  try {
    const response = await fetch(
      `${baseUrl}/homepage?populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}