function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = 0;
  let booksBorrowed = books.forEach ( book => {
    if (!book.borrows[0].returned) {
      result += 1;
    };
  });
  return result;
};

function getMostCommonGenres(books) {
  let result = []; 
  books.forEach((book) => {
    let genreExists = result.find((genre) => genre.name === book.genre)

   if (!genreExists) {
      result.push({ name: book.genre, count: 1 });
    } else {
      genreExists.count += 1;
    };
  });
 return result.sort((genre1, genre2) => genre2.count - genre1.count).slice(0, 5);
};
 
function getMostPopularBooks(books) {
    let result = {};
    const mapped = books.map((book) => {
      const { title } = book;
      const borrowed = book.borrows.length;
      result = { name: title, count: borrowed
       };
      return result;
    });
   return mapped.sort((a,b) => b.count - a.count).slice(0, 5);
  };
  
function getMostPopularAuthors(books, authors) {
let result = [];
authors.forEach(author => {
  let returnAuthor = {
    name: `${author.name.first} ${author.name.last}`, 
    count:0
  };
  books.forEach(book => {
    if (book.authorId === author.id) {
      returnAuthor.count += book.borrows.length
    };
  });
  result.push(returnAuthor);
});
 return result.sort( (author1, author2) => author2.count - author1.count).slice(0, 5);
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
