let myLibrary = [];

// function to put book together
function Book() {
  book_title = document.getElementById('title').value;
  book_author = document.getElementById('author').value;
  alert(book_title);
  alert(book_author);

 // addBookToLibrary();
}

function addBookToLibrary() {
    myLibrary.push(this.bookvalue);
    alert(myLibrary);
}