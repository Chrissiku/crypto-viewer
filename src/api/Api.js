const allCoins = (currency) => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
};

const singleCoin = (coin_id) => {
  return `https://api.coingecko.com/api/v3/coins/${coin_id}`;
};

const chart = (id, d = 365, currency) => {
  return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${d}`;
};

const trendingCoins = (currency) => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
};

export const chartButtons = [
  {
    text: "24 H",
    value: 1,
  },
  {
    text: "30 D",
    value: 30,
  },
  {
    text: "3 M",
    value: 90,
  },
  {
    text: "1 Y",
    value: 365,
  },
];

export { allCoins, singleCoin, chart, trendingCoins };
