const baseUrl = "https://api.jikan.moe/v4/manga";

export const fetchManga = async (params) => {
  const urlParams = new URLSearchParams(params);

  try {
    const response = await fetch(`${baseUrl}?${urlParams}`);
    if (!response.ok) throw new Error("Error fetching manga data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
