import { AboutWidget } from "@/components/AboutWidget";
import { GalleryWidget } from "@/components/GalleryWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Empty for now */}
          <div className="hidden lg:block" />
          
          {/* Right side - Widgets */}
          <div className="space-y-8">
            <AboutWidget />
            <GalleryWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
