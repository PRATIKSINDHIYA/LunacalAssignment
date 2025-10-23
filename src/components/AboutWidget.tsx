import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Star, Award, Users, TrendingUp, Heart, Sparkles } from "lucide-react";

const tabs = ["About Me", "Experiences", "Recommended"] as const;

const content = {
  "About Me": `👋 Hello! I'm Dave, your dedicated sales representative at Salesforce with 3+ years of experience in transforming businesses through innovative CRM solutions.

🏠 Born and raised in Albany, NY, I've been calling Santa Clara home for the past decade with my amazing wife Tiffany and our adorable 4-year-old twin daughters, Emma and Ella.

⏰ Family comes first! My calendar is typically blocked between 9-10 AM for school drop-offs, but I'm always available to help you achieve your sales goals.

💼 Specializing in enterprise solutions, I've helped over 200+ companies streamline their sales processes and increase revenue by an average of 35%.`,
  
  "Experiences": `🚀 **Salesforce Sales Representative** (2021-Present)
   • Achieved 150% of annual quota for 3 consecutive years
   • Led enterprise deals worth $2M+ in total contract value
   • Trained 50+ new sales reps on CRM best practices

📈 **Business Development Manager** - TechCorp (2019-2021)
   • Increased company revenue by 40% through strategic partnerships
   • Managed a portfolio of 100+ enterprise clients
   • Developed innovative sales methodologies still used company-wide

🎓 **MBA in Business Administration** - Stanford University (2017-2019)
   • Specialization in Sales & Marketing
   • Graduated Magna Cum Laude
   • President of Sales & Marketing Club`,
  
  "Recommended": `⭐ **Client Testimonials**
   "Dave transformed our sales process completely. Revenue increased by 45% in just 6 months!" - Sarah Johnson, CEO TechStart

🏆 **Awards & Recognition**
   • Salesforce Top Performer 2023
   • Best Sales Rep of the Year 2022
   • Customer Satisfaction Award 2021-2023

🤝 **Why Work With Me?**
   • 98% client satisfaction rate
   • 24/7 support availability
   • Custom solutions for every business size
   • Proven track record of success`
};

export const AboutWidget = () => {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("About Me");
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (newTab: typeof tabs[number]) => {
    if (isAnimating) return;
    
    const currentIndex = tabs.indexOf(activeTab);
    const newIndex = tabs.indexOf(newTab);
    setDirection(newIndex > currentIndex ? 'right' : 'left');
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveTab(newTab);
      setIsAnimating(false);
    }, 150);
  };

  const getTabIcon = (tab: typeof tabs[number]) => {
    switch (tab) {
      case "About Me": return <Users className="w-4 h-4" />;
      case "Experiences": return <Award className="w-4 h-4" />;
      case "Recommended": return <Star className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-widget rounded-[28px] shadow-lg border border-widget-border p-8 transition-all duration-300 hover:shadow-xl relative">
      <div className="flex items-start gap-6 mb-8">
        <div className="flex-1 flex justify-center">
          <div className={cn(
            "bg-black rounded-[20px] p-1.5 inline-flex gap-1 relative overflow-visible transition-all duration-500",
            isAnimating && "shadow-lg shadow-gray-500/20"
          )}>
            {/* Animated background slider */}
            <div 
              className={cn(
                "absolute top-1.5 bottom-1.5 rounded-[20px] transition-all duration-500 ease-out",
                "shadow-[0_8px_32px_rgba(0,0,0,0.8)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]",
                "shadow-[0_0_20px_rgba(255,255,255,0.3)]",
                activeTab === "About Me" && "left-1.5 w-[calc(33.333%-4px)]",
                activeTab === "Experiences" && "left-[calc(33.333%+2px)] w-[calc(33.333%-4px)]",
                activeTab === "Recommended" && "left-[calc(66.666%+2px)] w-[calc(33.333%-4px)]"
              )}
              style={{ backgroundColor: 'rgb(39, 43, 49)' }}
            />
            
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={cn(
                  "relative px-8 py-3 rounded-[16px] font-medium text-base transition-all duration-500 flex items-center gap-2 z-10",
                  activeTab === tab
                    ? "text-white shadow-lg scale-105"
                    : "text-gray-400 hover:text-white hover:scale-105"
                )}
              >
                <span className={cn(
                  "transition-all duration-300",
                  activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-300"
                )}>
                  {getTabIcon(tab)}
                </span>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="h-[300px] overflow-y-auto pr-4 custom-scrollbar relative">
        <div 
          key={activeTab}
          className={cn(
            "text-gray-300 leading-relaxed whitespace-pre-line",
            "animate-in fade-in duration-700",
            direction === 'right' ? "slide-in-from-right-8" : "slide-in-from-left-8",
            isAnimating && "opacity-50"
          )}
        >
          {content[activeTab]}
        </div>
      </div>

      {/* Animated Recommended Button */}
      {activeTab === "Recommended" && (
        <div className="mt-6 flex justify-center">
          <button className="group relative px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-600">
            <div className="relative flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gray-300" />
              <span>Get Started Today</span>
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      )}
    </div>
  );
};
