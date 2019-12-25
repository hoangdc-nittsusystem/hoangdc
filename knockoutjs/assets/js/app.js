console.log(ko)
class Person {
    bookArray = ko.observableArray(['aewrasdf', 'werwe']);

    input = ko.observable("");

    enterNewBook () {
        this.bookArray.push(this.input());
        this.input("");
        console.log(this.bookArray)
    }
}

ko.applyBindings(new Person());