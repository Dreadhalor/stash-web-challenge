import { IGif } from "@giphy/js-types";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui";
import { cn } from "@/lib/utils";
import { MdVerified } from "react-icons/md";

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

  const avatar = gif.user?.avatar_url;
  const getDisplayName = () => {
    if (gif?.user && gif?.user?.display_name !== "") {
      return gif?.user?.display_name;
    }
    if (gif?.username !== "") {
      return gif?.username;
    }
    if (gif?.source_tld !== "") {
      return gif?.source_tld;
    }
    if (gif?.title !== "") {
      return gif?.title;
    }
    return "";
  };
  const displayName = getDisplayName();
  const isVerified = gif?.user?.is_verified;

  return (
    <Dialog>
      <DialogTrigger asChild onClick={() => console.log("clicked:", gif)}>
        <div className="group relative mb-1 cursor-pointer overflow-hidden rounded-lg">
          <video
            src={getImagePreview(gif)}
            playsInline
            autoPlay
            muted
            loop
            className="w-full"
          />
          <div
            className={cn(
              "pointer-events-none absolute bottom-0 left-0 right-0 flex h-[60px]",
              "bg-gradient-to-b from-transparent to-black",
              "opacity-0 transition-all duration-200 group-hover:opacity-100",
            )}
          >
            <div className="mx-3 mb-3 mt-auto flex items-center text-xs text-white">
              {avatar && <img src={avatar} className="mr-2 h-8 w-8" />}
              <span className="mr-1">{displayName}</span>
              {isVerified && <MdVerified />}
            </div>
          </div>
        </div>
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
