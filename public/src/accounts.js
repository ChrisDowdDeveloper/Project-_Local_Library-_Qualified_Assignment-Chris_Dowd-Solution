function findAccountById(accounts, id) {
  let foundAcct = accounts.find(acctId => {
      if (acctId.id === id) {
        return acctId;
      };
    });
  return foundAcct;
};


function sortAccountsByLastName(accounts) {
  let sortedAccounts = accounts.sort( (name1, name2) => (name1.name.last > name2.name.last) ? 1 : -1);
   return sortedAccounts;
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  for (let id in books) { 
    const borrowedBooks = books[id].borrows.filter(book => book.id === account.id); result += borrowedBooks.length; 
  };
  return result;
};

function getBooksPossessedByAccount(account, books, authors){
  let result = books.filter((book) => book.borrows.some(acc => acc.id === account.id && acc.returned === false));
  books.map(book => { 
 let author = authors.find(author => author.id === book.authorId) 
    book.author = author;
     return book;
  });
  return result;
};
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
