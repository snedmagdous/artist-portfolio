# Translation Setup Guide

Your website now uses **Google Cloud Translation API** to automatically translate all content from English to Arabic when users click the AR button.

## How It Works

1. You write all your content in English
2. When a user clicks "AR", the site automatically translates everything to Arabic using Google Translate
3. Translations are cached so they only need to be fetched once
4. When you update your English text, the Arabic translations update automatically

## Setup Instructions

### Step 1: Get a Google Cloud Translation API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select an existing one)
3. Enable the **Cloud Translation API**:
   - Go to "APIs & Services" → "Library"
   - Search for "Cloud Translation API"
   - Click "Enable"
4. Create an API Key:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy your API key

### Step 2: Add Your API Key to the Project

1. Create a file named `.env` in your project root (same directory as `package.json`)
2. Add your API key:
   ```
   GATSBY_GOOGLE_TRANSLATE_API_KEY=your_api_key_here
   ```
3. Save the file

**Important:** Never commit your `.env` file to git! It's already in `.gitignore`.

### Step 3: Restart Your Development Server

```bash
npm run develop
```

## Free Tier

Google Cloud Translation API offers:
- **500,000 characters per month FREE**
- After that, $20 per million characters

For reference, your "Where Do You Go" page has about 2,000 characters of text. So you could translate that page **250 times per month** for free!

## Troubleshooting

### Translations not working?

1. Check that your `.env` file exists and has the correct API key
2. Make sure you've restarted the development server after adding the API key
3. Check the browser console for any error messages
4. Verify that the Cloud Translation API is enabled in your Google Cloud project

### Error: "API key not found"?

- The site will work without an API key, but it won't translate to Arabic
- Add your API key to `.env` as shown above

## How to Use in Other Pages

To add automatic translation to any other page:

1. Import the translation utility:
   ```javascript
   import { translateText } from "../utils/translate"
   ```

2. Create state for your content:
   ```javascript
   const [translations, setTranslations] = useState({
     title: "Your English Title",
     description: "Your English Description",
     // ... more content
   })
   ```

3. Add a useEffect to translate when language changes:
   ```javascript
   useEffect(() => {
     if (language === 'AR') {
       const translateAll = async () => {
         const translated = {};
         for (const [key, value] of Object.entries(originalContent)) {
           translated[key] = await translateText(value, 'ar');
         }
         setTranslations(translated);
       };
       translateAll();
     } else {
       setTranslations(originalContent);
     }
   }, [language])
   ```

4. Use `translations.key` in your JSX instead of hardcoded text

## Benefits

✅ **No more manual translation** - Just write in English and it translates automatically
✅ **Always up-to-date** - Change your English text and Arabic updates automatically
✅ **Effortless maintenance** - No need to maintain two versions of every page
✅ **Professional translations** - Google Translate provides high-quality Arabic translations
✅ **Cached** - Translations are cached, so they're fast after the first load
