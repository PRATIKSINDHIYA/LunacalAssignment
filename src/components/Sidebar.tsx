import { HelpCircle, Grid3x3 } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6">
      <button className="w-12 h-12 rounded-full bg-widget/50 backdrop-blur-sm border border-widget-border hover:bg-widget transition-all duration-300 flex items-center justify-center group hover:scale-110 shadow-lg">
        <HelpCircle className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
      </button>
      <button className="w-12 h-12 rounded-full bg-widget/50 backdrop-blur-sm border border-widget-border hover:bg-widget transition-all duration-300 flex items-center justify-center group hover:scale-110 shadow-lg">
        <Grid3x3 className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
      </button>
    </div>
  );
};
