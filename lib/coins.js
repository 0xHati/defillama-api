import { parseToTokenParams } from "./helpers/helper.js";
import _makeRequest from "./make_request.js";

const ENDPOINT = "https://coins.llama.fi";

const coins = {
  /**
   * Get current prices of tokens by contract address
   * @param {Array} coins - Array of objects defined as {chain: address}
   * @param {Object} [params] - Object containing query parameters
   * @param {string} [params.searchWidth=6h] - Time range on either side tofind price data, defaults to 6 hours (6h). Where: W = week, D = day, H = hour, M = minute (not case sensitive)
   * @returns {Promise}
   * */
  pricesCurrent: (coins, params = { searchWidth: "6h" }) => {
    const tokenParams = parseToTokenParams(coins);
    const path = `/prices/current/${tokenParams}`;

    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * Get earliest timestamp price record for coins
   * @param {Array} coins - Array of objects defined as {chain: address}
   * @returns {Promise}
   * */
  pricesFirst: (coins) => {
    const tokenParams = parseToTokenParams(coins);
    const path = `/prices/first/${tokenParams}`;

    return _makeRequest(ENDPOINT + path);
  },

  /**
   * Get historical prices of tokens by contract address
   * @param {Array} coins - Array of objects defined as {chain: address}
   * @param {number} timestamp - Unix timestamp of time when you want historical prices
   * @param {Object} [params] - Object containing query parameters
   * @param {string} [params.searchWidth=6h] - Time range on either side to find price data, defaults to 6 hours (6h). Where: W = week, D = day, H = hour, M = minute (not case sensitive)
   * @returns {Promise}
   * */
  pricesHistorical: (coins, timestamp, params = { searchWidth: "6h" }) => {
    const tokenParams = parseToTokenParams(coins);
    const path = `/prices/historical/${timestamp}/${tokenParams}`;

    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * Get historical prices for multiple tokens at multiple different timestamps.
   * @param {Object} [params] - Object containing query parameters
   * @param {string} [params.coins] - Object where keys are coins in the form {chain}:{address}, and values are arrays of requested timestamps
   * @param {string} [params.searchWidth=6h] - Time range on either side to find price data, defaults to 6 hours (6h). Where: W = week, D = day, H = hour, M = minute (not case sensitive)
   * @returns {Promise}
   * */
  batchHistorical: (params = { coins: {}, searchWidth: "6h" }) => {
    const path = `/batchHistorical`;

    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * Get token prices art regular time intervals.
   * @param {Array} coins - Array of objects defined as {chain: address}
   * @param {Object} [params] - Object containing query parameters
   * @param {number} [params.start] - Unix timestamp of earliest data point requested
   * @param {number} [params.end] - Unix timestamp of latest data point requested
   * @param {number} [params.span] - Number of data points returned, defaults to 0
   * @param {string} [params.period] - Duration between data points, defaults to 24 hours. Where: W = week, D = day, H = hour, M = minute (not case sensitive)
   * @param {string} [params.searchWidth] - Time range on either side to find price data, defaults to 10% of the period
   * @returns {Promise}
   * */
  chart: (coins, params = {}) => {
    const tokenParams = parseToTokenParams(coins);
    const path = `/chart/${tokenParams}`;

    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * Get percentage change in price over time.
   * @param {Array} coins - Array of objects defined as {chain: address}
   * @param {Object} [params] - Object containing query parameters
   * @param {number} [params.timestamp] - Timestamp of data point requested, defaults to time now
   * @param {boolean} [params.lookForward] - Whether you want the duration after your given timestamp or not, defaults to false (looking back)
   * @param {string} [params.period] - Duration between data points, defaults to 24 hours. Where: W = week, D = day, H = hour, M = minute (not case sensitive)
   * @returns {Promise}
   * */
  percentage: (coins, params = {}) => {
    const tokenParams = parseToTokenParams(coins);
    const path = `/percentage/${tokenParams}`;

    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * Get the closest block to a timestamp.
   * @param {string} chain - Chain which you want to get the block from
   * @param {number} timestamp - Unix timestamp of the block you are searching for
   * */
  block: (chain, timestamp) => {
    const path = `/block/${chain}/${timestamp}`;
    return _makeRequest(ENDPOINT + path);
  },
};

export default coins;
