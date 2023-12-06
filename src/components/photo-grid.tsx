import { useEffect, useState } from "react";

type Props = {
  term?: string;
};

const PhotoGrid = ({ term }: Props) => {
  const apiKey = "GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw";
  const urlBase = "https://api.giphy.com/v1/gifs/search";
  const fullUrl = `${urlBase}?api_key=${apiKey}&q=${term}`;

  const [data, setData] = useState<any[]>([]);
  const [gifs, setGifs] = useState<any[]>([]);
  useEffect(() => {
    fetch(fullUrl)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [term]);

  useEffect(() => {
    console.log("Data is:", data);
    if (data.data) {
      setGifs(data.data.map((gif) => gif.images.preview));
    }
  }, [data]);

  useEffect(() => {
    console.log("Gifs are:", gifs);
  }, [gifs]);

  return (
    <div>
      {gifs.map((gif) => (
        <video src={gif.mp4} playsInline autoPlay loop />
      ))}
    </div>
  );
};

export { PhotoGrid };
