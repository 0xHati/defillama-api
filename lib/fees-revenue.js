import _makeRequest from "./make_request.js";

const ENDPOINT = "https://api.llama.fi";

const feesRevenue = {
  /**
   * List all protocols along with summaries of their fees and revenue and dataType history data.
   * @param {Object} [params] - Object containing query parameters
   * @param {boolean} [params.exludeTotalDataChart=true] - True to exclude aggregated chart from response
   * @param {boolean} [params.exludeTotalDataChartBreakdown=true] - True to exlude broken down chart from response
   * @param {string} [params.dataType=dailyFees] - Desired data type. Available values: totalFees, dailyFees, totalRevenue, dailyRevenue
   * @returns {Promise}
   * */
  all: (params = { excludeTotalDataChart: true, excludeTotalDataChartBreakdown: true, dataType: "dailyFees" }) => {
    const path = `/overview/fees`;

    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * List all protocols of a chain along with summaries of their fees and revenue and dataType history data.
   * @param {string} chain - Chain name, list of all supported chains can be found under allChains attribute in feesRevenue.all (/overview/fees) response
   * @param {Object} [params] - Object containing query parameters
   * @param {boolean} [params.exludeTotalDataChart=true] - True to exclude aggregated chart from response
   * @param {boolean} [params.exludeTotalDataChartBreakdown=true] - True to exlude broken down chart from response
   * @param {string} [params.dataType=dailyFees] - Desired data type. Available values: totalFees, dailyFees, totalRevenue, dailyRevenue
   * @returns {Promise}
   * */
  chain: (chain, params = { excludeTotalDataChart: true, excludeTotalDataChartBreakdown: true, dataType: "dailyFees" }) => {
    const path = `/overview/fees/${chain}`;

    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * Get summary of protocol fees and revenue with historical data.
   * @param {string} protocol - Protocol slug
   * @param {Object} [params] - Object containing query parameters
   * @param {string} [params.dataType=dailyFees] - Desired data type. Available values: totalFees, dailyFees, totalRevenue, dailyRevenue
   * @returns {Promise}
   * */
  protocol: (protocol, params = { dataType: "dailyFees" }) => {
    const path = `/summary/fees/${protocol}`;

    return _makeRequest(ENDPOINT + path, params);
  },
};

export default feesRevenue;
