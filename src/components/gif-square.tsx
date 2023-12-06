type Props = {
  url?: string;
};

const GifSquare = ({ url }: Props) => {
  return (
    <div className="h-36 w-36 border">
      {url && <video className="h-36 w-36" src={url} />}
    </div>
  );
};

export { GifSquare };
