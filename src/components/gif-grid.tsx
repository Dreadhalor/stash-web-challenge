import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { GifsResult } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";
import { GifPreview } from "./gif-preview";

type Props = {
  term?: string;
};

const GifGrid = ({ term }: Props) => {
  const apiKey = "GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw";
  const urlBase = "https://api.giphy.com/v1/gifs";
  const fullUrl = `${urlBase}/search?api_key=${apiKey}&q=${term}`;
  const trendingUrl = `${urlBase}/trending?api_key=${apiKey}`;

  const [data, setData] = useState<GifsResult>({} as GifsResult);
  const [gifData, setGifData] = useState<IGif[]>([]);

  useEffect(() => {
    const url = term ? fullUrl : trendingUrl;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json as GifsResult));
  }, [term]);

  useEffect(() => {
    if (data.data) {
      setGifData(data.data);
    }
    // console.log("data changed", data);
  }, [data]);

  // Define breakpoint columns for Masonry layout
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex"
      columnClassName="mx-0.5"
    >
      {gifData.map((gif) => (
        <GifPreview key={gif.id} gif={gif} />
      ))}
    </Masonry>
  );
};

export { GifGrid };
