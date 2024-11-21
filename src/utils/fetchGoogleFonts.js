// utils/fetchGoogleFonts.ts
export const fetchGoogleFonts = async (apiKey) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`
    );
    const data = await response.json();

    if (data.items) {
      return data.items.map((font) => ({
        value: font.family,
        label: font.family,
        style: {
          fontFamily: font.family,
        },
      }));
    } else {
      console.error("No fonts found in the response");
      return [];
    }
  } catch (error) {
    console.error("Error fetching Google Fonts:", error);
    return [];
  }
};
