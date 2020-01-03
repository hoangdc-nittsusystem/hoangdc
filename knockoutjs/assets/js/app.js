console.log(moment())
class Person {
    baseBookArray = this.convertToObservable([
        {
            id: 1,
            title: "Math",
            description: "Book about learning math",
            updatedDate: moment().format('DD/MM/YYYY HH:mm:ss'),
            isUpdating: false
        },
        {
            id: 2,
            title: "Physic",
            description: "Book about learning physic",
            updatedDate: moment().format('DD/MM/YYYY HH:mm:ss'),
            isUpdating: false
        },
        {
            id: 3,
            title: "Chemistry",
            description: "Book about learning chemistry",
            updatedDate: moment().format('DD/MM/YYYY HH:mm:ss'),
            isUpdating: false
        },
    ]);

    convertToObservable(list) {
        let newList = [];
        list.forEach( function (obj) {
            var newObj = {};
            Object.keys(obj).forEach(function (key) {
                if (key != 'id') {
                    newObj[key] = ko.observable(obj[key]);
                }
            });
            newObj['id'] = obj['id'];
            newList.push(newObj);
        });
        return newList;
    }

    bookArray = ko.observableArray(this.baseBookArray);

    title = ko.observable("");
    description = ko.observable("");

    titleInput = ko.observable("");
    descriptionInput = ko.observable("");

    testOb = ko.observable({
        text: "tada"
    })

    enterNewBook() {
        console.log(this.bookArray)
        this.bookArray.push({
            id: this.baseBookArray.length > 0 ? this.baseBookArray[this.baseBookArray.length - 1].id + 1 : 1,
            title: ko.observable(this.title()),
            description: ko.observable(this.description()),
            updatedDate: ko.observable(moment().format('DD/MM/YYYY HH:mm:ss')),
            isUpdating: ko.observable(false)
        });

        this.title("");
        this.description("")

        console.log("add")
    }

    updateBook(item) {
        // console.log(item);
        this.baseBookArray.forEach( (el) => {
            if( el.id != item.id) {
                el.isUpdating(false);
            }
        })
        item.isUpdating(true);
        this.titleInput(item.title());
        this.descriptionInput(item.description());
    }

    saveUpdateBook(item) {
        this.baseBookArray.forEach( (book) => {
            if(book.id == item.id) {
                book.title(this.titleInput());
                book.description(this.descriptionInput());
                book.updatedDate(moment().format('DD/MM/YYYY HH:mm:ss'));
            }
        });
        console.log(item)
        item.isUpdating(false);
    }

    deleteBook(data, item, event) {
        this.bookArray.remove(item);
    }
}

ko.applyBindings(new Person());