import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  images: GalleryItem[];
  compact?: boolean;
};

export function GalleryGrid({ images, compact = false }: GalleryGridProps) {
  const selectedImages = compact ? images.slice(0, 4) : images;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {selectedImages.map((image, index) => (
        <figure
          key={`${image.src}-${index}`}
          className="group overflow-hidden rounded-xl border border-[#d9c8a8] bg-white shadow-sm"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={
                compact
                  ? "(max-width: 1024px) 50vw, 25vw"
                  : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              }
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <figcaption className="border-t border-[#eee3cf] px-3 py-2 text-xs text-[#3a4754]">
            {image.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
