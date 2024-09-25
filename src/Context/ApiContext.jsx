/* eslint-disable react/prop-types */
// ApiContext.js
import { createContext, useState, useEffect } from "react";

// Create context
export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch book data from the API
  const fetchBooks = async () => {
    const url =
      "https://all-books-api.p.rapidapi.com/getBooks";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "55188b7c57msh8918d4b682110e8p198c72jsn131a175ca79e",
        "x-rapidapi-host": "all-books-api.p.rapidapi.com",
      },
    };

    setError(null); // Reset error before new fetch
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("API response:", result); // Log the API response
      setBooks(result.results || []); // Check if result.results exists
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Ensure loading is false after fetch
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchBooks();
  }, []); // Empty array dependency to only run once on mount

  return (
    <ApiContext.Provider value={{ books, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};
