// Translation utility using Google Cloud Translation API
// This creates a cached translation system that automatically translates content to Arabic

const translationCache = new Map();

/**
 * Translates text from English to Arabic using Google Cloud Translation API
 * @param {string} text - The text to translate
 * @param {string} targetLang - Target language code (default: 'ar' for Arabic)
 * @returns {Promise<string>} - Translated text
 */
export async function translateText(text, targetLang = 'ar') {
  // Return original text if translating to English
  if (targetLang === 'en' || !text) {
    return text;
  }

  // Check cache first
  const cacheKey = `${text}_${targetLang}`;
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey);
  }

  try {
    // Get API key from environment variable
    const apiKey = process.env.GATSBY_GOOGLE_TRANSLATE_API_KEY;

    if (!apiKey) {
      console.warn('Google Translate API key not found. Using original text.');
      return text;
    }

    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        target: targetLang,
        format: 'text'
      })
    });

    if (!response.ok) {
      throw new Error(`Translation API error: ${response.status}`);
    }

    const data = await response.json();
    const translatedText = data.data.translations[0].translatedText;

    // Cache the translation
    translationCache.set(cacheKey, translatedText);

    return translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Fallback to original text on error
  }
}

/**
 * Translates multiple texts in batch for better performance
 * @param {string[]} texts - Array of texts to translate
 * @param {string} targetLang - Target language code
 * @returns {Promise<string[]>} - Array of translated texts
 */
export async function translateBatch(texts, targetLang = 'ar') {
  if (targetLang === 'en') {
    return texts;
  }

  try {
    const apiKey = process.env.GATSBY_GOOGLE_TRANSLATE_API_KEY;

    if (!apiKey) {
      console.warn('Google Translate API key not found. Using original texts.');
      return texts;
    }

    // Check cache for all texts
    const results = [];
    const textsToTranslate = [];
    const indices = [];

    texts.forEach((text, index) => {
      const cacheKey = `${text}_${targetLang}`;
      if (translationCache.has(cacheKey)) {
        results[index] = translationCache.get(cacheKey);
      } else {
        textsToTranslate.push(text);
        indices.push(index);
      }
    });

    // If all cached, return immediately
    if (textsToTranslate.length === 0) {
      return results;
    }

    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: textsToTranslate,
        target: targetLang,
        format: 'text'
      })
    });

    if (!response.ok) {
      throw new Error(`Translation API error: ${response.status}`);
    }

    const data = await response.json();

    // Fill in results and cache
    data.data.translations.forEach((translation, i) => {
      const index = indices[i];
      const translatedText = translation.translatedText;
      results[index] = translatedText;

      const cacheKey = `${textsToTranslate[i]}_${targetLang}`;
      translationCache.set(cacheKey, translatedText);
    });

    return results;
  } catch (error) {
    console.error('Batch translation error:', error);
    return texts; // Fallback to original texts on error
  }
}

