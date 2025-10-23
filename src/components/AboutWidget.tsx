import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = ["About Me", "Experiences", "Recommended"] as const;

const content = {
  "About Me": `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
  "Experiences": "Experience content would go here. This section can contain details about work history, projects, and professional achievements.",
  "Recommended": "Recommended content would go here. This section can contain recommendations, testimonials, or suggested connections."
};

export const AboutWidget = () => {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("About Me");

  return (
    <div className="bg-widget rounded-[28px] shadow-widget border border-widget-border p-6 transition-all duration-300 hover:shadow-widget-lg">
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-8 py-3 rounded-2xl font-medium text-base transition-all duration-300",
              activeTab === tab
                ? "bg-[hsl(var(--tab-active))] text-foreground shadow-md"
                : "bg-[hsl(var(--tab-inactive))] text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="h-[180px] overflow-y-auto pr-4 custom-scrollbar">
        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
          {content[activeTab]}
        </p>
      </div>
    </div>
  );
};
