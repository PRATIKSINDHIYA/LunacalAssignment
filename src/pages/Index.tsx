import { AboutWidget } from "@/components/AboutWidget";
import { GalleryWidget } from "@/components/GalleryWidget";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      <main className="container mx-auto px-8 pt-32 pb-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <section id="about">
            <AboutWidget />
          </section>
          
          <section id="gallery">
            <GalleryWidget />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
