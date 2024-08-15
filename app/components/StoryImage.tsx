import Image from "next/image";

type Props = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export default function StoryImage({ url, width, height, alt }: Props) {
  return (
    <>
      <div className="w-full h-32 md:h-48 lg:h-64 lg:w-96 rounded">
        <Image
          src={url}
          className="object-cover w-full h-full rounded"
          width={width}
          height={height}
          alt={alt}
        />
      </div>
    </>
  );
}
