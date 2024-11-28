/**
 * Obtém a lista de fontes disponíveis na API Google Fonts e as formata em um array de objetos utilizáveis.
 *
 * @param {string} apiKey - Chave de API válida para acessar o Google Fonts API.
 * @returns {Promise<Array>}- Uma promessa resolvendo em uma lista de fontes formatadas, ou um array vazio em caso de erro.
 */

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
