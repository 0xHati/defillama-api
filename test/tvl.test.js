import { describe } from "mocha";
import { shouldBeValidRequest } from "./assertions.js";
import deffillama from "../lib/index.js";

describe("tvl", function () {
  describe("protocols", function () {
    before(function (done) {
      deffillama.tvl.protocols().then((response) => {
        this.data = response;
        done();
      });
    });

    shouldBeValidRequest();
  });
  describe("protocol", function () {
    before(function (done) {
      const protocol = "aave";
      deffillama.tvl.protocol(protocol).then((response) => {
        this.data = response;
        done();
      });
    });

    shouldBeValidRequest();
  });
  describe("current", function () {
    before(function (done) {
      const protocol = "aave";
      deffillama.tvl.current(protocol).then((response) => {
        this.data = response;
        done();
      });
    });

    shouldBeValidRequest();
  });

  describe("chainsHistorical", function () {
    before(function (done) {
      deffillama.tvl.chainsHistorical().then((response) => {
        this.data = response;
        done();
      });
    });

    shouldBeValidRequest();
  });
  describe("chainHistorical", function () {
    before(function (done) {
      const chain = "ethereum";
      deffillama.tvl.chainHistorical(chain).then((response) => {
        this.data = response;
        done();
      });
    });

    shouldBeValidRequest();
  });
  describe("charts", function () {
    before(function (done) {
      deffillama.tvl.charts().then((response) => {
        this.data = response;
        done();
      });
    });

    shouldBeValidRequest();
  });
  describe("chainCharts", function () {
    before(function (done) {
      const chain = "ethereum";
      deffillama.tvl.chainCharts(chain).then((response) => {
        this.data = response;
        done();
      });
    });

    shouldBeValidRequest();
  });
  describe("chain", function () {
    before(function (done) {
      deffillama.tvl.chains().then((response) => {
        this.data = response;
        done();
      });
    });

    shouldBeValidRequest();
  });
});
