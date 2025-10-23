import { useState } from "react";
import { cn } from "@/lib/utils";
import { HelpCircle, Grid3x3 } from "lucide-react";

const tabs = ["About Me", "Experiences", "Recommended"] as const;

const content = {
  "About Me": `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
  "Experiences": "Experience content would go here. This section can contain details about work history, projects, and professional achievements.",
  "Recommended": "Recommended content would go here. This section can contain recommendations, testimonials, or suggested connections."
};

export const AboutWidget = () => {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("About Me");
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handleTabChange = (newTab: typeof tabs[number]) => {
    const currentIndex = tabs.indexOf(activeTab);
    const newIndex = tabs.indexOf(newTab);
    setDirection(newIndex > currentIndex ? 'right' : 'left');
    setActiveTab(newTab);
  };

  return (
    <div className="bg-widget rounded-[28px] shadow-widget border border-widget-border p-8 transition-all duration-300 hover:shadow-widget-lg">
      <div className="flex items-start gap-6 mb-8">
        <div className="flex flex-col gap-4 pt-2">
          <button className="w-11 h-11 rounded-full bg-muted/30 hover:bg-muted/50 flex items-center justify-center transition-all duration-300 hover:scale-110">
            <HelpCircle className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-11 h-11 rounded-full bg-muted/30 hover:bg-muted/50 flex items-center justify-center transition-all duration-300 hover:scale-110">
            <Grid3x3 className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="bg-black/40 rounded-[20px] p-1.5 inline-flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={cn(
                  "px-8 py-3 rounded-[16px] font-medium text-base transition-all duration-500",
                  activeTab === tab
                    ? "bg-[#2A2A2A] text-foreground shadow-lg scale-105"
                    : "text-muted-foreground hover:text-foreground hover:scale-105"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="h-[200px] overflow-y-auto pr-4 custom-scrollbar ml-[76px] relative">
        <div 
          key={activeTab}
          className={cn(
            "text-muted-foreground leading-relaxed whitespace-pre-line",
            "animate-in fade-in duration-700",
            direction === 'right' ? "slide-in-from-right-8" : "slide-in-from-left-8"
          )}
        >
          {content[activeTab]}
        </div>
      </div>
    </div>
  );
};
