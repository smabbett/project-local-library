//const {findAuthorById} = require("./books");

function totalBooksCount(books) {
  return books.length;
}
function findAuthorById(authors, id) {
  let result = authors.find((author) => author.id === id);
  return result;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  let result = books.filter((book) => book.borrows[0].returned === false);
  return result.length;
}

function getMostCommonGenres(books) {
  const genres = books.reduce((acc, book) => {
    if (!acc[book.genre]) {
      acc[book.genre] = 1;
    } else {
      acc[book.genre]++;
    }
    return acc;
  }, {});

  let result = Object.keys(genres)
    .map((genre) => {
      const obj = { name: genre, count: genres[genre] };
      return obj;
    })
    .sort((resA, resB) => (resA.count < resB.count ? 1 : -1));
  return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  let result = books
    .map((book) => ({
      name: book.title,
      count: book.borrows.length,
    }))
    .sort((resA, resB) => (resA.count < resB.count ? 1 : -1));
  return result.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = books.reduce((acc, book) => {
    if (!acc[book.authorId]) {
      acc[book.authorId] = book.borrows.length;
    } else {
      acc[book.authorId] += book.borrows.length;
    }
    return acc;
  }, {});

  result = Object.keys(result)
    .map((authorId) => {
      let author = findAuthorById(authors, parseInt(authorId));
      let authorName = `${author.name.first} ${author.name.last}`;
      let obj = {
        name: authorName,
        count: result[authorId],
      };
      return obj;
    })
    .sort((resA, resB) => (resA.count < resB.count ? 1 : -1));
  return result.slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
