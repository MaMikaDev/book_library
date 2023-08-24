//initialising class Book by the use of classess
class Book {

  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.myLibrary = [];
  }

  //method to remove the book from the existing library
  removeBook(index) {
    myLibrary.splice(index, 1);
    render();
  }

  //method to render the existing library
  render() {
    let libraryBook = document.querySelector("#library");
    libraryBook.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i];
      let bookElement = document.createElement("div");
      bookElement.setAttribute("class", "book-card");
      bookElement.innerHTML = `
      <div class="card-header">
        <h3 class="book-title">${book.title}</h3>
        <h4 class="book-author">by ${book.author}</h4>
      </div>
      <div class="card-body">
      <p>${book.pages} pages</p>
      <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
      <div class="card-btns">
      <button class="toggle-read-button" onclick="toggleRead(${i})">Toggle read</button>
      <button class="remove-button" onclick="removeBook(${i})">Remove Book</button>
      </div></div>`;
      libraryBook.appendChild(bookElement);
    }
  }

  //toggle the book read or not
  toggleRead(index) {
    this.read = !this.read;
    myLibrary[index].toggleRead();
    render();
  }

  //add book to the library
  addBookToLibrary() {

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked; //as it's for a radio button

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook); //adds book to the array
    render();

    alert("Book Added!");

    console.log(myLibrary);

  };

  openForm() {

    addNewBook.addEventListener("click", function () {
      let newBookForm = document.querySelector("#add-book-form");
      console.log(newBookForm);
      newBookForm.style.display = "block";

    })
    document.querySelector("#add-book-form").addEventListener("submit", function (event) {
      event.preventDefault(); //prevents default as there is no back-end to send anything to
      alert('huh huh huuuh')
      this.addBookToLibrary();
      console.log(myLibrary);

    })


    // addBookToLibrary(); //calls the function

    // alert("Book Added!");

    // console.log(myLibrary);


  }

}

const submitButton = document.querySelector('#submit-btn');
const addNewBook = document.querySelector('#new-book-btn');

new Book().removeBook();
new Book().addBookToLibrary();
new Book().openForm();
new Book().render();
new Book().toggleRead();

