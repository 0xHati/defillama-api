import _makeRequest from "./make_request.js";

const ENDPOINT = "https://abi-decoder.llama.fi";

const abiDecoder = {
  /**
   * Get the ABI for a function or event signature.
   * @param {Object} params - Object containing query parameters
   * @param {string} params.functions - Function 4 byte signatures, you can add many signatures by joining them with ','
   * @param {string} params.events - Event signatures, you can add many signatures by joining them with ','
   * @returns {Promise}
   * */
  getABI: (params = {}) => {
    const path = `/fetch/signature`;

    return _makeRequest(ENDPOINT + path, params);
  },

  /**
   * Get the verbose ABI for a function or event signature for a particular contract
   * @param {string} chain - Chain the smart contract is located in (available values: arbitrum, avalanche, bsc, celo, ethereum, fantom, optimism, polygon, tron)
   * @param {string} address - Address of the smart contract
   * @param {Object} params - Object containing query parameters
   * @param {string} params.functions - Function 4 byte signatures, you can add many signatures by joining them with ','
   * @param {string} params.events - Event signatures, you can add many signatures by joining them with ','
   * @returns {Promise}
   * */
  getVerboseABI: (chain, address, params = {}) => {
    const path = `/fetch/contract/${chain}/${address}`;

    return _makeRequest(ENDPOINT + path, params);
  },
};

export default abiDecoder;
