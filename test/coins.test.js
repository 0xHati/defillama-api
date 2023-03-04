import { describe } from "mocha";
import { shouldBeValidRequest } from "./assertions.js";
import deffillama from "../lib/index.js";

const coins = [{ ethereum: "0xdF574c24545E5FfEcb9a659c229253D4111d87e1" }, { bsc: "0x762539b45a1dcce3d36d080f74d1aed37844b878" }];

describe("coins", function () {
  describe("pricesCurrent", function () {
    before(function (done) {
      const searchWidth = "4h";
      deffillama.coins.pricesCurrent(coins, searchWidth).then((response) => {
        this.data = response;
        done();
      });
    });

    shouldBeValidRequest();
  });
  describe("pricesFirst", function () {
    before(function (done) {
      deffillama.coins.pricesFirst(coins).then((response) => {
        this.data = response;
        done();
      });
    });

    shouldBeValidRequest();
  });
  describe("pricesHistorical", function () {
    before(function (done) {
      const params = { searchWidth: "4h" };

      deffillama.coins.pricesHistorical(coins, "1648680149", params).then((response) => {
        this.data = response;
        done();
      });
    });

    shouldBeValidRequest();
  });
  describe("batchHistorical", function () {
    before(function (done) {
      done();
    });

    // shouldBeValidRequest();
  });

  describe("chart", function () {
    before(function (done) {
      const params = {
        start: 1672755258,
        span: 5,
        period: "2d",
        searchWidth: 8000,
      };
      deffillama.coins.chart(coins, params).then((response) => {
        this.data = response;
        done();
      });
    });

    shouldBeValidRequest();
  });
  describe("percentage", function () {
    before(function (done) {
      const params = {
        timestamp: 1672755258,
        lookForward: true,
        period: "2w",
      };
      deffillama.coins.percentage(coins, params).then((response) => {
        this.data = response;
        done();
      });
    });

    shouldBeValidRequest();
  });
  describe("block", function () {
    before(function (done) {
      const chain = "ethereum";
      const timestamp = "1672755258";
      deffillama.coins.block(chain, timestamp).then((response) => {
        this.data = response;
        done();
      });
    });

    shouldBeValidRequest();
  });
});
