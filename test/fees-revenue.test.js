import { describe } from "mocha";
import { shouldBeValidRequest } from "./assertions.js";
import deffillama from "../lib/index.js";

describe("feesRevenue", function () {
  describe("all", function () {
    before(function (done) {
      const params = { excludeTotalDataChart: false, excludeTotalDataChartBreakdown: true, dataType: "dailyRevenue" };
      deffillama.feesRevenue.all(params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("chain", function () {
    before(function (done) {
      const chain = "ethereum";
      const params = { excludeTotalDataChart: false, excludeTotalDataChartBreakdown: true, dataType: "dailyRevenue" };
      deffillama.feesRevenue.chain(chain, params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("protocol", function () {
    before(function (done) {
      const chain = "lyra";
      const params = { excludeTotalDataChart: false, excludeTotalDataChartBreakdown: true, dataType: "dailyRevenue" };
      deffillama.feesRevenue.protocol(chain, params).then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
});
