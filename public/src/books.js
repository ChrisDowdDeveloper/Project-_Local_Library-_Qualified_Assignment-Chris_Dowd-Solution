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
  console.log(books)
  const booksReturned = books.filter(book => book.borrows[0].returned === true);
  
  const booksCheckedOut = books.filter(book => book.borrows[0].returned === false);
  
  bookArray.push(booksCheckedOut, booksReturned);
  
  return bookArray
};

  

function getBorrowersForBook(book, accounts) {
  let returnedAccounts = [];
  accounts.forEach(account => {
    book.borrows.forEach(transaction => {
      if (transaction.id === account.id) {
        let match = {...account};
        match.returned = transaction.returned;
        returnedAccounts.push(match);
      };
    });
  });
  return returnedAccounts.slice(0,10);
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};