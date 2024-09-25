import { useState, useEffect } from "react";
import { fetchBooks } from "../Data/BookService"; // Adjust the path as necessary

const Picks = () => {
  const [books, setBooks] = useState(null); // Initialize to null to distinguish from empty array

  useEffect(() => {
    const getBooks = async () => {
      const fetchedBooks = await fetchBooks();
      setBooks(fetchedBooks);
    };

    getBooks();
  }, []); // Empty dependency array means this effect runs once on mount

  console.log(books); // Check the structure of the data

  return (
    <div className="flex flex-col justify-center gap-8 text-open bg-[#d0cfbb] py-20 px-4 text-black text-4xl z-0 lg:pt-0 lg:px-8 lg:flex-row lg:gap-0 lg:h-screen lg:justify-evenly">
      {books ? books.map((book, index) => (
        <div key={index} className="text-black">
          {/* Display book details here. Adjust according to the structure of book data */}
          <p>{book.}</p> {/* Example: assuming each book has a title */}
        </div>
      )) : <p>Loading books...</p> /* Fallback UI while books are null */}
    </div>
  );
};

export default Picks;