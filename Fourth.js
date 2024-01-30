//interacts with a third-party API asynchronously. write a js function that uses async/await to fetch data
//from a given api endpoint.(https://jsonplaceholder.typicode.com/posts). The function should return an array
//containing the title of first 5 post. If there is an error in the api it will throw an error.

async function fetchFirstFivePostTitles() {
  try {
    // Fetching data from the API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Check if the response status is okay. If not, throwing an error
    if (!response.ok) {
      throw new Error(`Error fetching data. Status: ${response.status}`);
    }

    // Parse the response JSON
    const data = await response.json();

    // Extract titles from the first 5 posts
    const firstFivePostTitles = data.slice(0, 5).map((post) => post.title);

    return firstFivePostTitles;
  } catch (error) {
    // Handle errors, e.g., log the error or rethrow it
    console.error("Error in fetchFirstFivePostTitles:", error.message);
    throw error;
  }
}

fetchFirstFivePostTitles()
  .then((titles) => console.log("Titles of the first 5 posts:", titles))
  .catch((error) => console.error("Error:", error.message));
