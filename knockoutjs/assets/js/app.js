console.log(ko)
class Person {
    baseBookArray = [
        {
            id: 1,
            title: "Math",
            description: "Book about learning math",
            updatedDate: Date.now(),
            isUpdating: false
        },
        {
            id: 2,
            title: "Physic",
            description: "Book about learning physic",
            updatedDate: Date.now(),
            isUpdating: false
        },
        {
            id: 3,
            title: "Chemistry",
            description: "Book about learning chemistry",
            updatedDate: Date.now(),
            isUpdating: false
        },
    ]

    convertToObservable(list) {
        let newList = [];
        list.forEach( function (obj) {
            var newObj = {};
            Object.keys(obj).forEach(function (key) {
                newObj[key] = ko.observable(obj[key]);
            });
            newList.push(newObj);
        });
        return newList;
    }

    bookArray = ko.observableArray(this.baseBookArray);

    title = ko.observable("");
    description = ko.observable("");

    testOb = ko.observable({
        text: "tada"
    })

    enterNewBook() {
        console.log(this.bookArray)
        this.bookArray.push({
            id: this.bookArray()[this.bookArray().length - 1].id + 1,
            title: this.title(),
            description: this.description(),
            updatedDate: Date.now()
        });

        this.title("");
        this.description("")

        console.log("add")
    }

    updateBook(item) {
        console.log(item)
        item.isUpdating = true;
        this.baseBookArray[this.bookArray.indexOf(item)].isUpdating = true;
        console.log(this.baseBookArray)
        // this.bookArray.replace()
    }

    saveUpdateBook() {

    }

    deleteBook(data, item, event) {
        console.log(item);
        this.bookArray.remove(item)
        console.log(this.baseBookArray)
    }
}

ko.applyBindings(new Person());