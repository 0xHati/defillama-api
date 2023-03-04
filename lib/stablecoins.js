import _makeRequest from "./make_request.js";

const ENDPOINT = "https://stablecoins.llama.fi";

const stablecoins = {
  /**
   * List all stablecoins along with their circulating amounts.
   * @param {Object} [params] - Object containing query parameters
   * @param {boolean} [params.includePrices] - Set whether to include current stablecoin prices
   * @returns {Promise}
   * */
  all: (params = {}) => {
    const path = `/stablecoins`;
    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * Get historical mcap sum of all stablecoins.
   * @param {Object} [params] - Object containing query parameters
   * @param {number} [params.stablecoin] - Stablecoin ID, you can get these from  {@link module:all} (/all)
   * @returns {Promise}
   * */
  chartAll: (params = {}) => {
    const path = `/stablecoincharts/all`;

    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * Get historical mcap sum of all stablecoins.
   * @param {string} chain - Chain slug, you can get these from tvl.chains (/chains) or the chains property on tvl.protocols (/protocols)
   * @param {Object} [params] - Object containing query parameters
   * @param {number} [params.stablecoin] - Stablecoin ID, you can get these from stablecoins.all (/all)
   * @returns {Promise}
   * */
  historyChain: (chain, params = {}) => {
    const path = `/stablecoincharts/${chain}`;

    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * Get historical mcap and historical chain distribution of a stablecoin.
   * @param {number} asset - Stablecoin ID, you can get these from stablecoins.all (/all)
   * @returns {Promise}
   * */
  historyAsset: (stablecoinId) => {
    const path = `/stablecoin/${stablecoinId}`;

    return _makeRequest(ENDPOINT + path);
  },

  /**
   * Get current mcap sum of all stablecoins on each chain.
   * @returns {Promise}
   * */
  overviewChains: () => {
    const path = `/stablecoinchains`;

    return _makeRequest(ENDPOINT + path);
  },

  /**
   * Get historical prices of all stablecoins.
   * @returns {Promise}
   * */
  historyPrices: () => {
    const path = `/stablecoinprices`;

    return _makeRequest(ENDPOINT + path);
  },
};

export default stablecoins;
