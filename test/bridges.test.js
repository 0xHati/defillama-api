import { describe } from "mocha";
import { shouldBeValidRequest } from "./assertions.js";
import deffillama from "../lib/index.js";

describe("bridges", function () {
  describe("all", function () {
    before(function (done) {
      const params = {
        includeChains: true,
      };
      deffillama.bridges.all(params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("summary", function () {
    before(function (done) {
      const id = "1";
      deffillama.bridges.summary(id).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("historyVolume", function () {
    before(function (done) {
      const chain = "ethereum";
      const params = {
        id: 5,
      };
      deffillama.bridges.historyVolume(chain, params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("statsDay", function () {
    before(function (done) {
      const timestamp = "1667304000";
      const chain = "ethereum";
      const params = {
        id: 5,
      };
      deffillama.bridges.statsDay(timestamp, chain, params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("transactions", function () {
    before(function (done) {
      const id = "1";
      const params = {
        starttimestamp: 1667260800,
        endtimestamp: 1667347200,
        sourcechain: "polygon",
        address: "ethereum:0x69b4B4390Bd1f0aE84E090Fe8af7AbAd2d95Cc8E",
        limit: "200",
      };
      deffillama.bridges.transactions(id, params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
});
