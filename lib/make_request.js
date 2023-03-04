const _makeRequest = async (path, params) => {
  const url = path + (params && Object.keys(params).length != 0 ? "?" + new URLSearchParams(params) : "");
  return await fetch(url);
};

export default _makeRequest;
