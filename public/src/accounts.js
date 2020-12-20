function findAccountById(accounts, id) {
  let result = accounts.find((account) => 
  account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  let result = accounts.sort((accountA, accountB) => 
    (accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1));
  return result;
}

function numberOfBorrows(account, books) {
  let result = books.filter((book) => 
  book.borrows.find((borrow) => 
  borrow.id === account.id));
  return result.length;
}


function booksInPossession(account, books, authors) {
  let booksOut = books.filter((book) => 
  book.borrows.find((borrow) => 
  borrow.id === account.id && borrow.returned === false));

let result = booksOut.map((book) => {
 let foundAuthor = authors.find((author) => author.id === book.authorId);
  const obj = {
    id: book.id, 
    title: book.title,
    genre: book.title,
    authorId: book.authorId,
    author: {...foundAuthor},
    borrows: book.borrows
  };
   return obj;
  });
return result;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
