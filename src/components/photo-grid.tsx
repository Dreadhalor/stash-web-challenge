import { useEffect, useState } from "react";
import { GifsResult } from "@giphy/js-fetch-api";
import { ImageAllTypes, IGif } from "@giphy/js-types";

type Props = {
  term?: string;
};

const PhotoGrid = ({ term }: Props) => {
  const apiKey = "GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw";
  const urlBase = "https://api.giphy.com/v1/gifs/search";
  const fullUrl = `${urlBase}?api_key=${apiKey}&q=${term}`;

  const [data, setData] = useState<GifsResult>({} as GifsResult);
  const [gifData, setGifData] = useState<IGif[]>([]);
  useEffect(() => {
    fetch(fullUrl)
      .then((response) => response.json())
      .then((json) => setData(json as GifsResult));
  }, [term]);

  useEffect(() => {
    console.log("Data is:", data);
    if (data.data) {
      setGifData(data.data);
    }
  }, [data]);

  useEffect(() => {
    console.log("Gifs are:", gifData);
  }, [gifData]);

  return (
    <div>
      {gifData.map((gif) => (
        <video
          key={gif.id}
          // freaking hilariously, the official type for gif.images.preview in the SDK is wrong
          src={(gif.images.preview as ImageAllTypes).mp4}
          playsInline
          autoPlay
          loop
        />
      ))}
    </div>
  );
};

export { PhotoGrid };
