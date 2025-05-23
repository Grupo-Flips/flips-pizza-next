import { useEffect, useState } from "react";
import Image from "next/image";

type InstagramPhoto = {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption?: string;
};

export default function InstagramFeed() {
  const [photos, setPhotos] = useState<InstagramPhoto[]>([]);

  useEffect(() => {
    fetch("/api/instagram")
      .then(res => res.json())
      .then(data => setPhotos(data || []));
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
      {photos.slice(0, 8).map(photo =>
        (photo.media_type === "IMAGE" || photo.media_type === "CAROUSEL_ALBUM") && photo.media_url ? (
          <a
            key={photo.id}
            href={photo.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-square overflow-hidden rounded-lg"
          >
            <div className="relative w-full h-0" style={{ paddingBottom: '100%' }}>
              <Image
                src={photo.media_url}
                alt={photo.caption || "Instagram Flip's Pizza"}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
                priority={false}
                unoptimized // Caso o domínio do Instagram não esteja na next.config.js, remova depois que adicionar
              />
            </div>
          </a>
        ) : null
      )}
    </div>
  );
}
