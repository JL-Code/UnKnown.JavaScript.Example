require("should");

var name = "Kvkens";

// describe 描述、叙述
describe("Name", function () {
    it("The name should be Kvkens", function () {
        name.should.eql("Kvkens");
    });
});

var Person = function (name) {
    this.name = name;
};
var Kvkens = new Person(name);

describe("InstanceOf", function () {
    it("Kvkens should be an instance of Person", function () {
        Kvkens.should.be.an.instanceof(Person);
    });

    it("Kvkens should be an instance of Object", function () {
        Kvkens.should.be.an.instanceof(Object);
    });
});
describe("Property", function () {
    it("Kvkens should have property name", function () {
        Kvkens.should.have.property("name");
    });
});