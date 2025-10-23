import { GalleryWidget } from "@/components/GalleryWidget";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      <main className="container mx-auto px-8 pt-32 pb-12">
        <div className="max-w-4xl mx-auto">
          <GalleryWidget />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
