import { describe } from "mocha";
import { shouldBeValidRequest } from "./assertions.js";
import deffillama from "../lib/index.js";

describe("stablecoins", function () {
  describe("all", function () {
    before(function (done) {
      deffillama.stablecoins.all().then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("chartAll", function () {
    before(function (done) {
      const params = { stablecoin: "1" };
      deffillama.stablecoins.chartAll(params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("historyChain", function () {
    before(function (done) {
      const chain = "ethereum";
      const params = { stablecoin: "1" };
      deffillama.stablecoins.historyChain(chain, params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("historyAsset", function () {
    before(function (done) {
      const stablecoinId = "1";
      deffillama.stablecoins.historyAsset(stablecoinId).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("overviewChains", function () {
    before(function (done) {
      deffillama.stablecoins.overviewChains().then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("historyPrices", function () {
    before(function (done) {
      deffillama.stablecoins.historyPrices().then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
});
