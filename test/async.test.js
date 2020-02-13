const fs = require("fs");
require("should");

describe("Async Test", function () {
    it("The file test.txt content should be Jiangy", function (done) {
        fs.readFile("test.txt", "utf-8", function (err, data) {
            should.equal(err, null);
            data.should.eql("Jiangy");
            done();
        })
    })
})