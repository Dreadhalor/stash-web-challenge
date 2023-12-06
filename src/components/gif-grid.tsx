import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { GifsResult } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";
import { GifPreview } from "./gif-preview";

type Props = {
  term?: string;
  apiKey: string;
};

const GifGrid = ({ term, apiKey }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const urlBase = "https://api.giphy.com/v1/gifs";
  const searchUrl = `${urlBase}/search?api_key=${apiKey}&q=${term}`;
  const trendingUrl = `${urlBase}/trending?api_key=${apiKey}`;

  const [data, setData] = useState<GifsResult>({} as GifsResult);
  const [gifData, setGifData] = useState<IGif[]>([]);

  useEffect(() => {
    const url = term ? searchUrl : trendingUrl;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json as GifsResult);
        setLoading(false);
      });
  }, [term]);

  useEffect(() => {
    if (data.data) {
      setGifData(data.data);
    }
  }, [data]);

  // Define breakpoint columns for Masonry layout
  const breakpointColumnsObj = {
    default: 4,
    1300: 3,
    900: 2,
    500: 1,
  };

  return (
    <>
      {gifData.length > 0 ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex"
          columnClassName="mx-0.5"
        >
          {gifData.map((gif) => (
            <GifPreview key={gif.id} gif={gif} />
          ))}
        </Masonry>
      ) : (
        <div>{loading ? "Loading..." : "No results found!"}</div>
      )}
    </>
  );
};

export { GifGrid };
