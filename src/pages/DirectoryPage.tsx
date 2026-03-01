import { useState } from "react";
import { businesses, categories } from "@/data/static-data";
import { Search, MapPin, Clock, Phone, ExternalLink, AlertTriangle, Map, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import DowntownMap, { MapMarker } from "@/components/DowntownMap";

const DirectoryPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false);

  const filtered = businesses.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || b.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const markers: MapMarker[] = filtered.map((b) => ({
    lat: b.lat,
    lng: b.lng,
    label: b.name,
    popup: `${b.category} · ${b.address}`,
    color: "green",
  }));

  return (
    <div className="animate-fade-in">
      <div className="px-4 pt-6 pb-3 flex items-start justify-between">
        <div>
          <h1 className="text-xl font-bold">Business Directory</h1>
          <p className="text-sm text-muted-foreground mt-1">Discover downtown businesses</p>
        </div>
        <button
          onClick={() => setShowMap(!showMap)}
          className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-colors"
          aria-label={showMap ? "Show list" : "Show map"}
        >
          {showMap ? <List className="w-5 h-5" /> : <Map className="w-5 h-5" />}
        </button>
      </div>

      {/* Search */}
      <div className="px-4 mb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search businesses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-10 bg-card"
          />
        </div>
      </div>

      {/* Category pills */}
      <div className="px-4 mb-4 flex gap-2 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Map view */}
      {showMap && (
        <div className="px-4 mb-4 animate-fade-in">
          <DowntownMap markers={markers} height="280px" />
        </div>
      )}

      {/* Listings */}
      <div className="px-4 space-y-3 pb-6">
        {filtered.map((biz, i) => (
          <div
            key={biz.id}
            className="bg-card rounded-xl border border-border overflow-hidden animate-slide-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <button
              onClick={() => setExpandedId(expandedId === biz.id ? null : biz.id)}
              className="w-full text-left p-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold">{biz.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{biz.category}</p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">{biz.address}</span>
              </div>
            </button>

            {expandedId === biz.id && (
              <div className="px-4 pb-4 space-y-3 border-t border-border pt-3 animate-fade-in">
                <p className="text-xs text-muted-foreground">{biz.description}</p>
                
                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-construction/5 border border-construction/10">
                  <AlertTriangle className="w-3.5 h-3.5 text-construction shrink-0 mt-0.5" />
                  <p className="text-[11px] text-construction font-medium">{biz.accessNote}</p>
                </div>

                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{biz.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{biz.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{biz.address}</span>
                  </div>
                </div>

                {biz.website !== "#" && (
                  <a
                    href={biz.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary font-medium hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Visit website
                  </a>
                )}
              </div>
            )}
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-8">No businesses found</p>
        )}
      </div>
    </div>
  );
};

export default DirectoryPage;
