import { Link } from "react-router-dom";
import { Construction, Store, Car, Grid3X3, AlertTriangle, ArrowRight } from "lucide-react";
import { constructionUpdates } from "@/data/static-data";
import heroImage from "@/assets/hero-downtown.webp";

const quickLinks = [
  { to: "/construction", icon: Construction, label: "Construction Updates", color: "bg-construction/10 text-construction" },
  { to: "/directory", icon: Store, label: "Business Directory", color: "bg-primary/10 text-primary" },
  { to: "/parking", icon: Car, label: "Find Parking", color: "bg-secondary/20 text-secondary" },
  { to: "/bingo", icon: Grid3X3, label: "Downtown Bingo", color: "bg-accent/20 text-accent-foreground" },
];

const HomePage = () => {
  const latestUpdate = constructionUpdates[0];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="relative h-52 overflow-hidden">
        <img src={heroImage} alt="Downtown Guelph streetscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-2xl font-bold tracking-tight">Downtown Guelph</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Your guide during construction</p>
        </div>
      </div>

      <div className="px-4 py-5 space-y-5">
        {/* Alert banner */}
        {latestUpdate && (
          <Link
            to="/construction"
            className="flex items-start gap-3 p-3 rounded-lg bg-construction/10 border border-construction/20"
          >
            <AlertTriangle className="w-5 h-5 text-construction shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-construction">{latestUpdate.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                {latestUpdate.description}
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-construction shrink-0 mt-0.5" />
          </Link>
        )}

        {/* Quick links */}
        <div className="grid grid-cols-2 gap-3">
          {quickLinks.map(({ to, icon: Icon, label, color }) => (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:shadow-md transition-shadow"
            >
              <div className={`p-3 rounded-full ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-center">{label}</span>
            </Link>
          ))}
        </div>

        {/* Info */}
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
          <h2 className="text-sm font-semibold text-primary mb-1">Downtown is Open!</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            While infrastructure improvements are underway, all downtown businesses remain open and accessible. 
            Use this app to find the best routes, parking, and discover local businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
