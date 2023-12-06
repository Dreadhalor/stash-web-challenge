import { PhotoGrid } from "./components/photo-grid";
import { Button, Input } from "./components/ui";

const App = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 border-4">
      <h1>Stash GIFs</h1>
      Hi, this will be more interesting later
      <div className="flex gap-2">
        <Input placeholder="Search for a gif!" />
        <Button>Search</Button>
      </div>
      <div></div>
      <PhotoGrid />
    </div>
  );
};

export { App };
