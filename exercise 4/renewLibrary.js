console.log("this is tut 36");
class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user) {
        if (this.issuedBooks[bookname] == undefined) {
            this.issuedBooks[bookname] = user;
            console.log("book is successfully issued");
        }
        else {
            console.log(`this book is alreadey issued`);
        }
    }

    returnBook(bookname) {

        delete this.issuedBooks[bookname];
    }
}

let harryLib=new Library(["Legend Harry","Legend Rohan","Legend Somu"]);
console.log(harryLib);
console.log(harryLib.getBookList());
console.log(harryLib.issueBook("Legend Harry","Harry"));
console.log(harryLib.issueBook("Legend Harry","Rohan"));
console.log(harryLib.returnBook("Legend Harry"));
console.log(harryLib.issueBook("Legend Harry","somu"));