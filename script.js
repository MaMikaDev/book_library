let myLibrary = [];

//initialising a book
function Book(title, author, pages, read) {

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

}


function render(){
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
    <button class="toggle-read-button" onclick="toggleRead(${i})">Toggle read</button>
    <button class="remove-button" onclick="removeBook(${i})">Remove Book</button>
    </div>`;
    libraryBook.appendChild(bookElement);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function addBookToLibrary() {

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked; //as it's for a radio button

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook); //adds book to the array
  render();

}


let newBookbtn = document.querySelector("#new-book-btn");

newBookbtn.addEventListener("click", function() {
  let newBookForm = document.querySelector("#add-book-form");
  console.log(newBookForm);
  newBookForm.style.display = "block";

})

document.querySelector("#add-book-form").addEventListener("submit", function(event) {
  event.preventDefault(); //prevents default as there is no back-end to send anything to

  addBookToLibrary(); //calls the function

  alert("Book Added!");

  console.log(myLibrary);

})