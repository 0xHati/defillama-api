import { describe } from "mocha";
import { shouldBeValidRequest } from "./assertions.js";

import deffillama from "../lib/index.js";

describe("abiDecoder", function () {
  describe("getABI", function () {
    before(function (done) {
      const params = {
        functions: "0x23b872dd,0x18fccc76,0xb6b55f25,0xf5d07b60",
        events:
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef,0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67,0x4cc7e95e48af62690313a0733e93308ac9a73326bc3c29f1788b1191c376d5b6",
      };
      deffillama.abiDecoder.getABI(params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("getVerboseABI", function () {
    before(function (done) {
      const chain = "ethereum";
      const address = "0x02f7bd798e765369a9d204e9095b2a526ef01667";
      const params = {
        functions: "0xf43f523a,0x95d89b41,0x95d89b41,0x70a08231,0x70a08231",
        events:
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef,0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
      };
      deffillama.abiDecoder.getVerboseABI(chain, address, params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
});
