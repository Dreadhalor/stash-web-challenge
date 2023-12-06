import { IGif } from "@giphy/js-types";
type Props = {
  gif: IGif;
};

const GifPreview = ({ gif }: Props) => {
  const getImageSrc = (gif: any) => {
    if (gif.images.preview.mp4) {
      return gif.images.preview.mp4;
    }
    if (gif.images.original.mp4) {
      return gif.images.original.mp4;
    }
    return "";
  };

  return (
    <video
      src={getImageSrc(gif)}
      playsInline
      autoPlay
      muted
      loop
      className="mb-1 w-full rounded-lg"
    />
  );
};

export { GifPreview };
