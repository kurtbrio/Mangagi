const baseUrl = "https://api.jikan.moe/v4/manga";

export const fetchManga = async (params, retries = 3, delay = 1000) => {
  const urlParams = new URLSearchParams(params);

  try {
    const response = await fetch(`${baseUrl}?${urlParams}`);

    if (response.status === 429 && retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      return fetchManga(params, retries - 1, delay * 2);
    }

    if (!response.ok) throw new Error("Error fetching manga data");
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
