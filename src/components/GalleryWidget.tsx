import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const GalleryWidget = () => {
  const [images, setImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=400&fit=crop"
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(images.length - 3, prev + 1));
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-widget rounded-[28px] shadow-widget border border-widget-border p-6 transition-all duration-300 hover:shadow-widget-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold px-8 py-3 bg-[hsl(var(--tab-active))] rounded-2xl">
          Gallery
        </h2>
        <div className="flex items-center gap-3">
          <button
            onClick={handleAddImage}
            className="px-6 py-2.5 rounded-full bg-secondary hover:bg-muted transition-colors duration-300 text-sm font-medium shadow-md flex items-center gap-2"
          >
            <span className="text-lg">+</span>
            ADD IMAGE
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
              currentIndex === 0
                ? "bg-muted/50 text-muted-foreground cursor-not-allowed"
                : "bg-secondary hover:bg-muted shadow-md"
            )}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= images.length - 3}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
              currentIndex >= images.length - 3
                ? "bg-muted/50 text-muted-foreground cursor-not-allowed"
                : "bg-primary hover:bg-primary/90 shadow-md"
            )}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {visibleImages.map((image, index) => (
          <div
            key={currentIndex + index}
            className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group"
          >
            <img
              src={image}
              alt={`Gallery image ${currentIndex + index + 1}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-500 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
