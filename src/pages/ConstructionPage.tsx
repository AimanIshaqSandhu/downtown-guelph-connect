import { constructionUpdates } from "@/data/static-data";
import { AlertTriangle, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const severityStyles = {
  high: "bg-destructive/10 text-destructive border-destructive/20",
  medium: "bg-construction/10 text-construction border-construction/20",
  low: "bg-success/10 text-success border-success/20",
};

const severityBadge = {
  high: "destructive" as const,
  medium: "secondary" as const,
  low: "outline" as const,
};

const ConstructionPage = () => {
  return (
    <div className="animate-fade-in">
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold">Construction Updates</h1>
        <p className="text-sm text-muted-foreground mt-1">Latest road closures & access changes</p>
      </div>

      <div className="px-4 space-y-3 pb-6">
        {constructionUpdates.map((update, i) => (
          <div
            key={update.id}
            className={`p-4 rounded-xl border ${severityStyles[update.severity]} animate-slide-up`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-sm font-semibold leading-tight">{update.title}</h3>
              <Badge variant={severityBadge[update.severity]} className="shrink-0 text-[10px]">
                {update.severity}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              {update.description}
            </p>
            <div className="flex flex-wrap gap-3 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {new Date(update.date).toLocaleDateString("en-CA", { month: "short", day: "numeric" })}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {update.affectedStreets.join(", ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConstructionPage;
