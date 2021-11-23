function findAuthorById(authors, id) {
  let foundAuthor = authors.find(author => {
    if (author.id === id) {
      return author;
    };
  });
  return foundAuthor;
};

function findBookById(books, id) {
  let foundBook = books.find(book => {
    if (book.id === id) {
      return book;
    };
  });
  return foundBook;
};

function partitionBooksByBorrowedStatus(books) {
  let bookArray = [];
  const booksReturned = books.filter(book => book.borrows[0].returned === true);
  const booksCheckedOut = books.filter(book => book.borrows[0].returned === false);
  bookArray.push(booksCheckedOut, booksReturned);
  return bookArray;
};

  

function getBorrowersForBook(book, accounts) {

  const accountNumber = accounts.reduce((sum, account) => {
    sum[account.id] = account;
    return sum;
  }, {});
  const result = book.borrows.map(({id, returned}) => ({...accountNumber[id], returned,})).slice(0, 10);
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};