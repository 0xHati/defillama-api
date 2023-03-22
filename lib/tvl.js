import _makeRequest from "./make_request.js";

const ENDPOINT = "https://api.llama.fi";

const tvl = {
  /**
   * List all protocols on defillama along with their tvl
   * /protocols
   * @function
   * @returns {Promise}
   * */
  protocols: () => {
    const path = "/protocols";
    return _makeRequest(ENDPOINT + path);
  },

  /**
   * Get historical TVL of a protocol and breakdowns by token and chain
   * /protocol{protocol}
   * @function
   * @param {string} protocol - protocol slug
   * @returns {Promise}
   * */
  protocol: (protocol) => {
    const path = `/protocol/${protocol}`;
    return _makeRequest(ENDPOINT + path);
  },

  /**
   * Simplified endpoint that only returns a number, the current TVL of a protocol
   * /tvl/{protocol}
   * @param {string} protocol - protocol slug
   * @returns {Promise}
   * */
  current: (protocol) => {
    const path = `/tvl/${protocol}`;
    return _makeRequest(ENDPOINT + path);
  },

  /**
   * Get historical TVL (excludes liquid staking and double counted tvl) of DeFi on all chains
   * /v2/historicalChainTvl
   * @returns {Promise}
   * */
  chainsHistorical: () => {
    const path = `/v2/historicalChainTvl`;
    return _makeRequest(ENDPOINT + path);
  },

  /**
   * Get historical TVL (excludes liquid staking and double counted tvl) of a chain
   * /v2/historicalChainTvl/{chain}
   * @param {string} chain - chain slug, you can get these from tvl.chains (/chains) or the chains property on tvl.protocols (/protocols)
   * @returns {Promise}
   * */
  chainHistorical: (chain) => {
    const path = `/v2/historicalChainTvl/${chain}`;
    return _makeRequest(ENDPOINT + path);
  },

  /**
   * Get historical TVL of DeFi on all chains
   * /charts
   * @returns {Promise}
   * */
  charts: () => {
    const path = "/charts";
    return _makeRequest(ENDPOINT + path);
  },

  /**
   * Get historical TVL of a chain
   * /charts/{chain}
   * @param {string} chain - chain slug, you can get these from /chains or the chains property on /protocols
   * @returns {Promise}
   * */
  chainCharts: (chain) => {
    const path = `/charts/${chain}`;
    return _makeRequest(ENDPOINT + path);
  },

  /**
   * Get current TVL of all chains
   * /chains
   * @returns {Promise}
   * */
  chains: () => {
    const path = `/chains`;
    return _makeRequest(ENDPOINT + path);
  },
};
export default tvl;
