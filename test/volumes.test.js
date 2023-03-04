import { describe } from "mocha";
import { shouldBeValidRequest } from "./assertions.js";
import deffillama from "../lib/index.js";

describe("volumes", function () {
  describe("desxAll", function () {
    before(function (done) {
      const params = { excludeTotalDataChart: false, excludeTotalDataChartBreakdown: true, dataType: "totalVolume" };
      deffillama.volumes.dexsAll(params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("dexsChain", function () {
    before(function (done) {
      const chain = "ethereum";
      const params = { excludeTotalDataChart: false, excludeTotalDataChartBreakdown: true, dataType: "totalVolume" };
      deffillama.volumes.dexsChain(chain, params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("dexsProtocol", function () {
    before(function (done) {
      const protocol = "uniswap";
      const params = { excludeTotalDataChart: false, excludeTotalDataChartBreakdown: true, dataType: "totalVolume" };
      deffillama.volumes.dexsProtocol(protocol, params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("dexsOptions", function () {
    before(function (done) {
      const params = { excludeTotalDataChart: false, excludeTotalDataChartBreakdown: true, dataType: "dailyPremiumVolume" };
      deffillama.volumes.dexsOptions(params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("dexsOptionsChain", function () {
    before(function (done) {
      const chain = "ethereum";

      const params = { excludeTotalDataChart: false, excludeTotalDataChartBreakdown: true, dataType: "dailyPremiumVolume" };
      deffillama.volumes.dexsOptionsChain(chain, params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("dexsOptionsProtocol", function () {
    before(function (done) {
      const protocol = "lyra";
      const params = { excludeTotalDataChart: false, excludeTotalDataChartBreakdown: true, dataType: "dailyPremiumVolume" };
      deffillama.volumes.dexsOptionsProtocol(protocol, params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
});
