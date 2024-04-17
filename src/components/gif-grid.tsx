import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { GifsResult } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';
import { GifPreview } from './gif-preview';
import { useAchievements } from 'dread-ui';

type Props = {
  term?: string;
  apiKey: string;
};

const GifGrid = ({ term, apiKey }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const urlBase = 'https://api.giphy.com/v1/gifs';
  const searchUrl = `${urlBase}/search?api_key=${apiKey}&q=${term}`;
  const trendingUrl = `${urlBase}/trending?api_key=${apiKey}`;

  const [data, setData] = useState<GifsResult>({} as GifsResult);
  const [gifData, setGifData] = useState<IGif[]>([]);

  const { unlockAchievementById } = useAchievements();

  useEffect(() => {
    setLoading(() => true);
    const url = term ? searchUrl : trendingUrl;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json.meta.status !== 200) alert(json.meta.msg);
        setData(json as GifsResult);
        setLoading(false);
      });
  }, [term]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (data.data) {
      setGifData(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (term && !gifData.length && !loading)
      unlockAchievementById('no_results', 'gifster');
  }, [term, gifData, loading, unlockAchievementById]);

  // Define breakpoint columns for Masonry layout
  const breakpointColumnsObj = {
    default: 4,
    1300: 3,
    900: 2,
    500: 1,
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading &&
        (gifData.length > 0 ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='flex'
            columnClassName='mx-0.5'
          >
            {gifData.map((gif) => (
              <GifPreview key={gif.id} gif={gif} />
            ))}
          </Masonry>
        ) : (
          <div>No results found!</div>
        ))}
    </>
  );
};

export { GifGrid };
