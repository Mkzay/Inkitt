import { useState, useEffect } from "react";
import Loader from "../Reusable/Loader";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const url = "https://all-books-api.p.rapidapi.com/getBooks";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "55188b7c57msh8918d4b682110e8p198c72jsn131a175ca79e",
          "x-rapidapi-host": "all-books-api.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("API response:", result);

        // Attempt to find books data in the response
        let booksData = result.books || result.data || result;
        if (Array.isArray(booksData)) {
          setBooks(booksData);
        } else if (typeof booksData === "object") {
          // If it's an object, try to find an array inside it
          const firstArrayValue = Object.values(booksData).find(Array.isArray);
          if (firstArrayValue) {
            setBooks(firstArrayValue);
          } else {
            throw new Error(
              "Couldn't find an array of books in the API response"
            );
          }
        } else {
          throw new Error("API response structure is not as expected");
        }
      } catch (err) {
        console.error("Error fetching books:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {books.length > 0 ? (
        <ul className="flex items-center justify-center my-auto gap-4 overflow-x-auto overflow-y-hidden hide-scrollbar scroll-smooth h-fit py-10">
          {books.map((book, index) => (
            <li
              key={`${book.bookTitle || book.title || "book"}-${index}`}
              className="flex flex-col h-72"
            >
              <p className="w-48">
                {book.bookAuthor || book.author || "No author"}
              </p>
              {(book.bookImage || book.image) && (
                <img
                  src={book.bookImage || book.image}
                  alt={book.bookTitle || book.title || "Book cover"}
                  className="w-36 h-48"
                />
              )}
              <p className="w-32">
                {book.bookTitle || book.title || "No title"}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default Book;
