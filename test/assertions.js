import chai from "chai";
const should = chai.should();

export const shouldBeValidRequest = function () {
  it("should be a successful request", function (done) {
    this.data.status.should.equal(200);
    done();
  });
};
