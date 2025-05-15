
import { useState } from "react";
import { MediaItem, mediaCollection } from "../data/mediaData";
import MediaCollection from "../components/MediaCollection";
import MediaPlayer from "../components/MediaPlayer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const featuredMedia = mediaCollection[0];

  const handleSelectMedia = (item: MediaItem) => {
    setSelectedMedia(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearSelectedMedia = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="min-h-screen bg-entertainment-dark text-white">
      <header className="bg-gradient-to-r from-entertainment-dark to-black py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-entertainment-primary">
            StreamFlix
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-entertainment-primary transition-colors">Home</a>
            <a href="#" className="hover:text-entertainment-primary transition-colors">Movies</a>
            <a href="#" className="hover:text-entertainment-primary transition-colors">TV Shows</a>
            <a href="#" className="hover:text-entertainment-primary transition-colors">My List</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {selectedMedia ? (
          <MediaPlayer item={selectedMedia} onClose={clearSelectedMedia} />
        ) : (
          <div className="relative rounded-xl overflow-hidden aspect-[21/9] mb-8">
            <img
              src={featuredMedia.thumbnailUrl}
              alt={featuredMedia.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
              <h2 className="text-4xl font-bold mb-2">{featuredMedia.title}</h2>
              <p className="text-lg max-w-2xl mb-6">
                {featuredMedia.description}
              </p>
              <div className="flex space-x-4">
                <Button 
                  className="bg-entertainment-primary hover:bg-entertainment-primary/90"
                  onClick={() => handleSelectMedia(featuredMedia)}
                >
                  Play Now
                </Button>
                <Button variant="outline">More Info</Button>
              </div>
            </div>
          </div>
        )}

        <MediaCollection 
          items={mediaCollection} 
          onSelectMedia={handleSelectMedia} 
        />
      </main>

      <footer className="bg-black text-gray-400 py-8 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-bold mb-2">StreamFlix</h3>
              <p className="text-sm">© 2025 StreamFlix. All rights reserved.</p>
            </div>
            <div className="flex space-x-8">
              <div>
                <h4 className="text-white text-sm font-bold mb-2">Company</h4>
                <ul className="text-sm space-y-1">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white text-sm font-bold mb-2">Help</h4>
                <ul className="text-sm space-y-1">
                  <li><a href="#" className="hover:text-white">FAQ</a></li>
                  <li><a href="#" className="hover:text-white">Devices</a></li>
                  <li><a href="#" className="hover:text-white">Terms of Use</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
