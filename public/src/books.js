const { findAccountById } = require('./accounts');

// function findAuthorById(authors, id) {
//   let result = authors.find((author) => author.id === id);
//   return result;
// }

function findBookById(books, id) {
  let result = books.find((book) => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  let booksOut = books.filter((book) => book.borrows[0].returned === false);
  let booksIn = books.filter((book) => book.borrows[0].returned === true);
  let allBooks = [];
  allBooks[0] = booksOut;
  allBooks[1] = booksIn;
  return allBooks;
}

function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map((borrow) => {
    let foundAccount = findAccountById(accounts, borrow.id);
    const obj = {
      id: borrow.id,
      returned: borrow.returned,
      picture: foundAccount.picture,
      age: foundAccount.age,
      name: { ...foundAccount.name },
      company: foundAccount.company,
      email: foundAccount.email,
      registered: foundAccount.registered,
    };
    return obj;
  });
  return result.slice(0, 10);
}

module.exports = {
  // findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
