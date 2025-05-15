
import { useState } from "react";
import { MediaItem } from "../data/mediaData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MediaCollectionProps {
  items: MediaItem[];
  onSelectMedia: (item: MediaItem) => void;
}

const MediaCollection = ({ items, onSelectMedia }: MediaCollectionProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Popular Content</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card 
            key={item.id} 
            className={`overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
              hoveredId === item.id ? "ring-2 ring-entertainment-primary" : ""
            }`}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => onSelectMedia(item)}
          >
            <div className="relative aspect-video">
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2">
                <Badge className="bg-black/70 text-white">{item.duration}</Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <Badge variant="outline" className="text-xs">
                  {item.category}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MediaCollection;
