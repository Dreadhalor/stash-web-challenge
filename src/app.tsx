import { useState } from "react";
import { PhotoGrid } from "./components/photo-grid";
import { Button, Input } from "./components/ui";

const App = () => {
  const [inputState, setInputState] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 border-4">
      <h1>Stash GIFs</h1>
      Hi, this will be more interesting later
      <div className="flex gap-2">
        <Input
          placeholder="Search for a gif!"
          onChange={(term) => setInputState(term.target.value)}
        />
        <Button onClick={() => setSearchTerm(inputState)}>Search</Button>
      </div>
      <div>{searchTerm}</div>
      <PhotoGrid />
    </div>
  );
};

export { App };
