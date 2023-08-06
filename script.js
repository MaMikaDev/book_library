let myLibrary = [];

//initialising a book
function Book(title, author, pages, read) {

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

}

function addBookToLibrary() {

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked; //as it's for a radio button

  let newBook = new Book(title, author, pages, read);
  console.log(newBook);

}



let newBookbtn = document.querySelector("#new-book-btn");

newBookbtn.addEventListener("click", function() {
  let newBookForm = document.querySelector("#add-book-form");
  console.log(newBookForm);
  newBookForm.style.display = "block";

})

document.querySelector("#add-book-form").addEventListener("submit", function () {
  event.preventDefault(); //prevents default

  addBookToLibrary(); //calls the function
  
  alert("Book Added!");


})