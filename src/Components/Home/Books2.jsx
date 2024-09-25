import { useState, useEffect } from "react";

const Book2 = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const url = "https://freebooks-api2.p.rapidapi.com/fetchEbooks/horror";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "55188b7c57msh8918d4b682110e8p198c72jsn131a175ca79e",
          "x-rapidapi-host": "freebooks-api2.p.rapidapi.com",
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {books.length > 0 ? (
        <ul className="flex items-center justify-center my-auto gap-4 flex-wrap">
          {books.map((book) => (
            <li key={book.bookId} className="flex flex-col h-72">
              <p className="w-48">{book.authors}</p>
              {(book.imgUrl || book.imgUrl) && (
                <img src={book.imgUrl} alt={book.title} className="w-36 h-48" />
              )}
              <p className="w-32">{book.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default Book2;
