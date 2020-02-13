require("should")
const fs = require("fs");

describe("Async Test", function () {
    it("The file test.txt content should be Jiangy", function (done) {
        fs.readFile("./test.txt", "utf-8", function (err, data) {
            data.should.eql("Kvkens");
            done();
        })
    })
})