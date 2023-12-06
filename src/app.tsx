import { useEffect, useState } from "react";
import { GifGrid } from "./components/gif-grid";
import { FaArrowTrendUp } from "react-icons/fa6";
import { SearchBar } from "./components/search-bar";
import { TrendingSearches } from "./components/trending-searches";

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
      .then((json) => setTrendingSearches(json.data));
  }, []);

  const handleSearchTermClick = (term: string) => {
    setInputState(term); // Update input field state
    setSearchTerm(term); // Update search term state
  };

  return (
    <div className="flex min-h-full w-full flex-col items-center gap-2 px-32 py-12">
      <h1>Stash GIFs</h1>
      Wouldn't it be funny if I didn't delete this filler text?
      <SearchBar
        inputState={inputState}
        setInputState={setInputState}
        setSearchTerm={setSearchTerm}
      />
      <TrendingSearches
        trendingSearches={trendingSearches}
        searchTerm={searchTerm}
        handleSearchTermClick={handleSearchTermClick}
      />
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
