// firebase
export const API_FIREBASE_KEY = import.meta.env.VITE_API_KEY;
export const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
export const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
export const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
export const APP_ID = import.meta.env.VITE_APP_ID;

// coin gecko
export const GECKO_API_KEY = import.meta.env.VITE_GECKO_API_KEY;
export const GECKO_MARKETS_URL =
  "https://api.coingecko.com/api/v3/coins/markets";

// crypto compare
export const COMPARE_API_KEY = import.meta.env.VITE_COMPARE_API_KEY;
export const COMPARE_NEWS_URL =
  "https://min-api.cryptocompare.com/data/v2/news/?lang=EN";
export const COMAPRE_HISTOHOUR_URL =
  "https://min-api.cryptocompare.com/data/v2/histohour";
export const COMPARE_STREAMING_URL = `https://streamer.cryptocompare.com/v2?api_key=${COMPARE_API_KEY}`;
