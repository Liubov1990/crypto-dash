import { ThemeEnum } from "../context/ThemeContext";

export const EXCHANGE_CURRENCIES_LIST = {
  USD: {
    id: "USD",
    symbol: "$",
  },
  EUR: {
    id: "EUR",
    symbol: "€",
  },
  GPB: {
    id: "GPB",
    symbol: "£",
  },
  CHF: {
    id: "CHF",
    symbol: "₣",
  },
  UAH: {
    id: "UAH",
    symbol: "₴",
  },
};

export const CRYPTO_CURRENCIES_LIST = [
  {
    id: "bitcoin",
    symbol: "BTC",
  },
  {
    id: "ethereum",
    symbol: "ETC",
  },
  {
    id: "ripple",
    symbol: "XRP",
  },
  {
    id: "bitcoin-cash",
    symbol: "BCH",
  },
  {
    id: "chainlink",
    symbol: "LINK",
  },
  {
    id: "litecoin",
    symbol: "LTC",
  },
  {
    id: "cardano",
    symbol: "ADA",
  },
  {
    id: "binancecoin",
    symbol: "BNB",
  },
  {
    id: "stellar",
    symbol: "XLM",
  },
  {
    id: "monero",
    symbol: "XMR",
  },
  {
    id: "solana",
    symbol: "SOL",
  },
];

export const FORMATTER_PRICE_PATTERNS = {
  btc: ",.2f",
  eth: ",.2f",
  bnb: ",.3f",
  sol: ",.3f",
  xrp: ",.4f",
  ada: ",.4f",
  link: ",.3f",
  bch: ",.3f",
  ltc: ",.4f",
  xlm: ",.5f",
  xmr: ",.3f",
};

export const THEMES = [ThemeEnum.DARK, ThemeEnum.LIGHT];
