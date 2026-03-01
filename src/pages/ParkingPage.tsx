import { parkingLots } from "@/data/static-data";
import { Car, MapPin, DollarSign, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import DowntownMap, { MapMarker } from "@/components/DowntownMap";

const typeLabel = { lot: "Surface Lot", garage: "Parking Garage", street: "On-Street" };

const ParkingPage = () => {
  const markers: MapMarker[] = parkingLots.map((lot) => ({
    lat: lot.lat,
    lng: lot.lng,
    label: lot.name,
    popup: `${lot.spots} spots · ${lot.rate}`,
    color: "blue",
  }));

  return (
    <div className="animate-fade-in">
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold">Parking Guide</h1>
        <p className="text-sm text-muted-foreground mt-1">Find parking near downtown</p>
      </div>

      {/* Map */}
      <div className="px-4 mb-4">
        <DowntownMap markers={markers} height="220px" />
      </div>

      <div className="px-4 space-y-3 pb-6">
        {parkingLots.map((lot, i) => (
          <div
            key={lot.id}
            className="p-4 rounded-xl bg-card border border-border animate-slide-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold">{lot.name}</h3>
              </div>
              <Badge variant="outline" className="text-[10px]">
                {typeLabel[lot.type]}
              </Badge>
            </div>

            <div className="space-y-1.5 text-xs text-muted-foreground mb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{lot.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-3.5 h-3.5" />
                <span>{lot.rate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-3.5 h-3.5" />
                <span>{lot.spots} spots</span>
              </div>
            </div>

            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-primary/5 border border-primary/10">
              <AlertTriangle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <p className="text-[11px] text-primary font-medium">{lot.accessNote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingPage;
