"use strict";

const fp = require("fastify-plugin");

let currencies = [
  {
    id: "bitcoin",
    name: "BTC",
    vs_currency: "btc",
  },
  {
    id: "ethereum",
    name: "ETH",
    vs_currency: "eth",
  },
  {
    id: "tether",
    name: "USDT",
    vs_currency: "usd",
  },
  {
    id: "binancecoin",
    name: "BNB",
    vs_currency: "bnb",
  },
  {
    id: "litecoin",
    name: "LTC",
    vs_currency: "ltc",
  },
  {
    id: "bitshares",
    name: "BITS",
    vs_currency: "bits",
  },
  {
    id: "bitcoin-cash",
    name: "BCH",
    vs_currency: "bch",
  },
];

module.exports = fp(async function (fastify, opts) {
  fastify.decorate("getCurrencies", function () {
    return currencies;
  });
});
