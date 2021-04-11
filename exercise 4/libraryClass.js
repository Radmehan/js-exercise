console.log("This is library class implement");
class Library {
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user){
        console.log(this.issuedBooks[bookname]);
        if (this.issuedBooks[bookname] ==undefined){
        this.issuedBooks[bookname] =  user;
        console.log("book is successfully issued");
        }
        else{
            console.log("this book is already issued");
        }
    
    }

    returnBook(bookname){
        delete this.issuedBooks[bookname];
        console.log("book is returned");
    }
}
let harryLib=new Library(["Legend Harry","Legend Rohan","Legend Somu"]);
console.log(harryLib);
console.log(harryLib.getBookList());
console.log(harryLib.issueBook("Legend Harry","Harry"));
console.log(harryLib.issueBook("Legend Harry","Rohan"));
console.log(harryLib.returnBook("Legend Harry"));
console.log(harryLib.issueBook("Legend Harry","somu"));
