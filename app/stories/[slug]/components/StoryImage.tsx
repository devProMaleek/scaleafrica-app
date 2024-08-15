import Image from "next/image";
import ImageSkeleton from "./ImageSkeleton";

type Props = {
  isLoading: boolean;
  url: string;
  width: number;
  height: number;
  alt: string;
};

export default function StoryImage({
  isLoading,
  url,
  width,
  height,
  alt,
}: Props) {
  return (
    <>
      <div className="w-full h-96 md:h-[500px] lg:h-[610px] rounded">
        {isLoading ? (
          <ImageSkeleton />
        ) : (
          <Image
            src={url}
            className="object-auto w-full h-full rounded"
            width={width}
            height={height}
            alt={alt}
          />
        )}
      </div>
    </>
  );
}
