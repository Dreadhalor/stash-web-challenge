import { useEffect, useState } from "react";
import { GifGrid } from "./components/gif-grid";
import { Button, Input } from "./components/ui";
import { FaArrowTrendUp } from "react-icons/fa6";

const App = () => {
  const [inputState, setInputState] = useState<string>(""); // State for input field
  const [searchTerm, setSearchTerm] = useState<string>(""); // State for search term
  const [trendingSearches, setTrendingSearches] = useState<string[]>([]);

  const apiKey = "GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw";
  const urlBase = "https://api.giphy.com/v1";
  const trendingSearchesUrl = `${urlBase}/trending/searches?api_key=${apiKey}`;

  useEffect(() => {
    fetch(trendingSearchesUrl)
      .then((response) => response.json())
      .then((json) => {
        // console.log("trending searches", json);
        setTrendingSearches(json.data);
      });
  }, []);

  const handleSearchTermClick = (term: string) => {
    setInputState(term); // Update input field state
    setSearchTerm(term); // Update search term state
  };

  return (
    <div className="flex min-h-full w-full flex-col items-center gap-2 px-32 py-12">
      <h1>Stash GIFs</h1>
      Wouldn't it be funny if I didn't delete this filler text?
      <div className="flex w-full gap-2">
        <Input
          type="search"
          placeholder="Search for a gif!"
          className="flex-1"
          value={inputState} // To propagate changes back to the input field
          onChange={(e) => setInputState(e.target.value)}
        />
        <Button onClick={() => setSearchTerm(inputState)}>Search</Button>
      </div>
      <div className="flex w-full flex-wrap content-start items-center gap-2 text-xl">
        {trendingSearches.map((term) => (
          <Button
            key={term} // Add a key for each item
            variant={term === searchTerm ? "default" : "secondary"}
            size="sm"
            className="gap-1 px-2"
            onClick={() => handleSearchTermClick(term)}
          >
            <FaArrowTrendUp />
            {term}
          </Button>
        ))}
      </div>
      <div className="flex w-full flex-wrap content-start items-center gap-2 text-xl">
        {searchTerm ? (
          <>Search: "{searchTerm}"</>
        ) : (
          <>
            <FaArrowTrendUp />
            Trending
          </>
        )}
      </div>
      <GifGrid term={searchTerm} />
    </div>
  );
};

export { App };
