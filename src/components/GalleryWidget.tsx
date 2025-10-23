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
    <div className="bg-widget rounded-[28px] shadow-widget border border-widget-border p-8 transition-all duration-300 hover:shadow-widget-lg">
      <div className="flex items-start gap-6 mb-6">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold px-8 py-3 bg-black/40 rounded-[20px]">
              Gallery
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={handleAddImage}
                className="px-6 py-3 rounded-[20px] text-sm font-medium flex items-center gap-2 border border-muted/20 shadow-lg transform -translate-y-1"
                style={{ backgroundColor: 'hsl(0deg 0% 0% / 30%)' }}
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
                  "w-12 h-12 rounded-[20px] flex items-center justify-center border border-muted/20 shadow-lg transform -translate-y-1",
                  currentIndex === 0
                    ? "text-muted-foreground cursor-not-allowed grayscale opacity-50"
                    : ""
                )}
                style={{ backgroundColor: 'hsl(0deg 0% 0% / 30%)' }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= images.length - 3}
                className={cn(
                  "w-12 h-12 rounded-[20px] flex items-center justify-center border border-muted/20 shadow-lg transform -translate-y-1",
                  currentIndex >= images.length - 3
                    ? "text-muted-foreground cursor-not-allowed grayscale opacity-50"
                    : ""
                )}
                style={{ backgroundColor: 'hsl(0deg 0% 0% / 30%)' }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {visibleImages.map((image, index) => (
              <div
                key={currentIndex + index}
                className="aspect-square rounded-2xl overflow-visible cursor-pointer group perspective-1000"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl transform-gpu">
                  <img
                    src={image}
                    alt={`Gallery image ${currentIndex + index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
