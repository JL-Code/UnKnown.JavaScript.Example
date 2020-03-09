var Something = {
    cool() {
        this.greeting = "Hello World";
        this.count = this.count ? this.count + 1 : 1;
    }
}

Something.cool();
console.log(Something.greeting);
console.log(Something.count);

var Car = {
    cool() {
        Something.cool.call(this);
    }
}
Car.cool();
console.log("Car", Car.greeting)
console.log("Car", Car.count)