import { useEffect, useState } from "react";
import { GifGrid } from "./components/gif-grid";
import { Button, Input } from "./components/ui";
import { FaArrowTrendUp } from "react-icons/fa6";

const App = () => {
  const [inputState, setInputState] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [trendingSearches, setTrendingSearches] = useState<string[]>([]);

  const apiKey = "GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw";
  const urlBase = "https://api.giphy.com/v1";
  const trendingSearchesUrl = `${urlBase}/trending/searches?api_key=${apiKey}`;
  useEffect(() => {
    fetch(trendingSearchesUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log("trending searches", json);
        setTrendingSearches(json.data);
      });
  }, []);

  return (
    <div className="flex min-h-full w-full flex-col items-center gap-2 px-32 py-12">
      <h1>Stash GIFs</h1>
      Hi, this will be more interesting later
      <div className="flex w-full gap-2">
        <Input
          type="search"
          placeholder="Search for a gif!"
          className="flex-1"
          onChange={(term) => setInputState(term.target.value)}
        />
        <Button onClick={() => setSearchTerm(inputState)}>Search</Button>
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
        {trendingSearches.map((term) => (
          <Button
            variant="secondary"
            size="sm"
            className="gap-1 px-2"
            onClick={() => setSearchTerm(term)}
          >
            <FaArrowTrendUp />
            {term}
          </Button>
        ))}
      </div>
      <GifGrid term={searchTerm} />
    </div>
  );
};

export { App };
