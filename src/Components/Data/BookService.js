export const fetchBooks = async () => {
  const url = "https://hapi-books.p.rapidapi.com/week/horror/10";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "55188b7c57msh8918d4b682110e8p198c72jsn131a175ca79e",
      "x-rapidapi-host": "hapi-books.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const parsedData = JSON.parse(result); // Parse the JSON string to an object/array
    console.log(parsedData); // Log the parsed data

    // Example of accessing the first book's name
    if (parsedData && parsedData.length > 0) {
      console.log(parsedData[0].name); // Ensure this property exists
    } else {
      console.log("No data available or data is not an array.");
    }
  } catch (error) {
    console.error(error);
  }
};
{
  /*const url = "https://books-api7.p.rapidapi.com/books/get/random/";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "55188b7c57msh8918d4b682110e8p198c72jsn131a175ca79e",
      "x-rapidapi-host": "books-api7.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }*/
}
