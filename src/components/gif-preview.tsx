import { IGif } from "@giphy/js-types";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui";
type Props = {
  gif: IGif;
};

const GifPreview = ({ gif }: Props) => {
  const getImagePreview = (gif: any) => {
    if (gif.images.preview.mp4) {
      return gif.images.preview.mp4;
    }
    if (gif.images.original.mp4) {
      return gif.images.original.mp4;
    }
    return "";
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <video
          src={getImagePreview(gif)}
          playsInline
          autoPlay
          muted
          loop
          className="mb-1 w-full cursor-pointer rounded-lg transition-all hover:brightness-75"
        />
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto border-0 p-0">
        <video
          src={gif.images.original.mp4}
          playsInline
          autoPlay
          muted
          loop
          className="w-full rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
};

export { GifPreview };
