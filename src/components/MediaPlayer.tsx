
import { useState } from "react";
import { MediaItem } from "../data/mediaData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

interface MediaPlayerProps {
  item: MediaItem | null;
  onClose: () => void;
}

const MediaPlayer = ({ item, onClose }: MediaPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!item) return null;

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control the video playback
    console.log(`${isPlaying ? 'Pausing' : 'Playing'} ${item.title}`);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8 overflow-hidden bg-card shadow-lg animate-fade-in">
      <div className="relative aspect-video bg-black">
        <img
          src={item.thumbnailUrl}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-white text-center">
            <p className="text-lg">Video Player Placeholder</p>
            <p className="text-sm opacity-70">(Actual video would play here)</p>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline">{item.category}</Badge>
              <span className="text-sm text-muted-foreground">{item.duration}</span>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
        
        <p className="text-muted-foreground mb-6">{item.description}</p>
        
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" size="icon">
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button 
            size="icon" 
            className="h-12 w-12 rounded-full bg-entertainment-primary hover:bg-entertainment-primary/90"
            onClick={togglePlayPause}
          >
            {isPlaying ? 
              <Pause className="h-6 w-6" /> : 
              <Play className="h-6 w-6 ml-1" />
            }
          </Button>
          <Button variant="outline" size="icon">
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaPlayer;
