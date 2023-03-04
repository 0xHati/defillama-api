import _makeRequest from "./make_request.js";

const ENDPOINT = "https://api.llama.fi";

const volumes = {
  /**
   * List all dexs along with summaries of their volume and dataType history data.
   * @param {Object} [params] - Object containing query parameters
   * @param {boolean} [params.exludeTotalDataChart=true] - True to exclude aggregated chart from response
   * @param {boolean} [params.exludeTotalDataChartBreakdown=true] - True to exlude broken down chart from response
   * @param {string} [params.dataType=dailyVolume] - Desired data type. Available values: dailyVolume, totalVolume
   * @returns {Promise}
   * */
  dexsAll: (params = { excludeTotalDataChart: true, excludeTotalDataChartBreakdown: true, dataType: "dailyVolume" }) => {
    const path = `/overview/dexs`;

    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * List all dexs along with summaries of their volumes and dataType history data filtering by chain.
   * @param {string} chain - Chain name, list of all supported chains can be found under allChains attribute in dexs.allDexs (/overview/dexs) response
   * @param {Object} [params] - Object containing query parameters
   * @param {boolean} [params.exludeTotalDataChart=true] - True to exclude aggregated chart from response
   * @param {boolean} [params.exludeTotalDataChartBreakdown=true] - True to exlude broken down chart from response
   * @param {string} [params.dataType=dailyVolume] - Desired data type. Available values: dailyVolume, totalVolume
   * @returns {Promise}
   * */
  dexsChain: (chain, params = { excludeTotalDataChart: true, excludeTotalDataChartBreakdown: true, dataType: "dailyVolume" }) => {
    const path = `/overview/dexs/${chain}`;
    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * Get summary of dex volume with historical data
   * @param {string} protocol - Protocol slug
   * @param {Object} [params] - Object containing query parameters
   * @param {boolean} [params.exludeTotalDataChart=true] - True to exclude aggregated chart from response
   * @param {boolean} [params.exludeTotalDataChartBreakdown=true] - True to exlude broken down chart from response
   * @param {string} [params.dataType=dailyVolume] - Desired data type. Available values: dailyVolume, totalVolume
   * @returns {Promise}
   * */
  dexsProtocol: (protocol, params = { excludeTotalDataChart: true, excludeTotalDataChartBreakdown: true, dataType: "dailyVolume" }) => {
    const path = `/summary/dexs/${protocol}`;

    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * List all options dexs along with summaries of their volumes and dataType history data.
   * @param {Object} [params] - Object containing query parameters
   * @param {boolean} [params.exludeTotalDataChart=true] - True to exclude aggregated chart from response
   * @param {boolean} [params.exludeTotalDataChartBreakdown=true] - True to exlude broken down chart from response
   * @param {string} [params.dataType=dailyNotionalVolume] - Desired data type. Available values: dailyPremiumVolume, dailyNotionalVolume, totalPremiumVolume, totalNotionalVolume
   * @returns {Promise}
   * */
  dexsOptions: (params = { excludeTotalDataChart: true, excludeTotalDataChartBreakdown: true, dataType: "dailyNotionalVolume" }) => {
    const path = `/overview/options`;
    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * List all options dexs along with summaries of their volumes and dataType history data filtering by chain.
   * @param {string} chain - Chain name, list of all supported chains can be found under allChains attribute in dexs.dexsAll (/overview/options) response.
   * @param {Object} [params] - Object containing query parameters
   * @param {boolean} [params.exludeTotalDataChart=true] - True to exclude aggregated chart from response
   * @param {boolean} [params.exludeTotalDataChartBreakdown=true] - True to exlude broken down chart from response
   * @param {string} [params.dataType=dailyNotionalVolume] - Desired data type. Available values: dailyPremiumVolume, dailyNotionalVolume, totalPremiumVolume, totalNotionalVolume
   * @returns {Promise}
   * */
  dexsOptionsChain: (chain, params = { excludeTotalDataChart: true, excludeTotalDataChartBreakdown: true, dataType: "dailyNotionalVolume" }) => {
    const path = `/overview/options/${chain}`;
    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * Get summary of options dex volume with historical data
   * @param {string} protocol - Protocol slug
   * @param {Object} [params] - Object containing query parameters
   * @param {string} [params.dataType=dailyNotionalVolume] - Desired data type. Available values: dailyPremiumVolume, dailyNotionalVolume, totalPremiumVolume, totalNotionalVolume
   * @returns {Promise}
   * */
  dexsOptionsProtocol: (protocol, params = { dataType: "dailyNotionalVolume" }) => {
    const path = `/summary/options/${protocol}`;
    return _makeRequest(ENDPOINT + path, params);
  },
};

export default volumes;
