import { useState } from "react";
import { GifGrid } from "./components/gif-grid";
import { Button, Input } from "./components/ui";
import { FaArrowTrendUp } from "react-icons/fa6";

const App = () => {
  const [inputState, setInputState] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div className="flex min-h-full w-full flex-col items-center gap-2 px-32 py-12">
      <h1>Stash GIFs</h1>
      Hi, this will be more interesting later
      <div className="flex gap-2">
        <Input
          type="search"
          placeholder="Search for a gif!"
          onChange={(term) => setInputState(term.target.value)}
        />
        <Button onClick={() => setSearchTerm(inputState)}>Search</Button>
      </div>
      <div className="flex w-full content-start items-center gap-2 text-xl">
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
