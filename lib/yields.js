import _makeRequest from "./make_request.js";

const ENDPOINT = "https://yields.llama.fi";

const yields = {
  /**
   * Retrieve the latest data for all pools, including enriched information such as predictions.
   * @returns {Promise}
   * */
  pools: () => {
    const path = `/pools`;

    return _makeRequest(ENDPOINT + path);
  },

  /**
   * Get historical APY and TVL of a pool.
   * @param {string} pool - Pool id, can be retrieved from yields.pools (/pools) (property is called pool)
   * @returns {Promise}
   * */
  chartPool: (pool) => {
    const path = `/chart/${pool}`;

    return _makeRequest(ENDPOINT + path);
  },
};

export default yields;
