import _makeRequest from "./make_request.js";

const ENDPOINT = "https://bridges.llama.fi";

const bridges = {
  /**
   * List all bridges along with summaries of recent bridge volumes.
   * @param {Object} [params] - Object containing query parameters
   * @param {boolean} [params.includeChain] - Set whether to include previous day volume breakdown by chain
   * @returns {Promise}
   * */
  all: (params = {}) => {
    const path = `/bridges`;
    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * Get summary of bridge volume and volume breakdown by chain.
   * @param {number} id - Bridge ID, you can get these from bridges.all (/bridges)
   * @returns {Promise}
   * */
  summary: (bridgeId) => {
    const path = `/bridge/${bridgeId}`;
    return _makeRequest(ENDPOINT + path);
  },

  /**
   * Get historical volume for a bridge, chain, or bridge on a particular chain.
   * @param {string} chain - Chain slug, you can get these from tvl.chains (/chains). You can also use 'all' for volume on all chains
   * @param {number} id - Bridge ID, you can get these from bridges.all (/bridges)
   * @returns {Promise}
   * */
  historyVolume: (chain, params = {}) => {
    const path = `/bridgevolume/${chain}`;

    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * Get a 24h token and address volume breakdown for a bridge.
   * @param {number} timestamp - Unix timestamp. Data returned will be for the 24h period starting at 00:00 UTC that the timestamp lands in
   * @param {string} chain - Chain slug, you can get these from tvl.chains (/chains).
   * @param {number} id - Bridge ID, you can get these from bridges.all (/bridges)
   * @returns {Promise}
   * */
  statsDay: (timestamp, chain, params = {}) => {
    const path = `/bridgedaystats/${timestamp}/${chain}`;

    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * Get all transactions for a bridge within a date range.
   * @param {number} id - Bridge ID, you can get these from bridges.all (/bridges)
   * @param {Object} [params] - Object containing query parameters
   * @param {number} [params.starttimestamp] - Start unix timestamp for date range
   * @param {number} [params.endtimestamp] - End unix timestamp for date range
   * @param {string} [params.sourcechain] - Returns only transactions that are bridging from the specified source chain
   * @param {string} [params.address] - Returns only transactions with spefified address as 'from' or 'to'. Addresses are queried in the form {chain}:{address}, where chain is an identifier such as ethereum, bsc, polygon, etc.
   * @param {number} [params.limit] - Limit the number of transactions returned, maximum is 6000
   * @returns {Promise}
   * */
  transactions: (id, params = {}) => {
    const path = `/transactions/${id}`;
    return _makeRequest(ENDPOINT + path, params);
  },
};

export default bridges;
