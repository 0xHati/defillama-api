import { describe } from "mocha";
import { shouldBeValidRequest } from "./assertions.js";
import deffillama from "../lib/index.js";

describe("yields", function () {
  describe("pools", function () {
    before(function (done) {
      deffillama.yields.pools().then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
  describe("chartPool", function () {
    before(function (done) {
      deffillama.yields.chartPool("747c1d2a-c668-4682-b9f9-296708a3dd90").then((response) => {
        this.data = response;
        done();
      });
    });
    shouldBeValidRequest();
  });
});
