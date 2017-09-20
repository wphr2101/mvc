function MyViewModel() {
    this.a = ko.observable(10);
    this.b = ko.observable(40);
    this.yourName = ko.observable("");

    this.totalAvg = ko.computed(function () {

        if (typeof (this.a()) !== "number" || typeof (this.b()) !== "number") {
            this.a(Number(this.a()));   //convert string to Number
            this.b(Number(this.b()));   //convert string to Number
        }

        total = (this.a() + this.b()) / 2;
        return total;
    }, this);
}

//function AppViewModel() {
//    this.yourName = ko.observable("");
//}
