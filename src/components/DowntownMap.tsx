import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export interface MapMarker {
  lat: number;
  lng: number;
  label: string;
  popup?: string;
  color?: "red" | "orange" | "green" | "blue" | "gray";
}

interface DowntownMapProps {
  markers: MapMarker[];
  height?: string;
  className?: string;
}

const colorToHex: Record<string, string> = {
  red: "#dc2626",
  orange: "#ea580c",
  green: "#16a34a",
  blue: "#2563eb",
  gray: "#6b7280",
};

const createIcon = (color: string = "blue") => {
  const hex = colorToHex[color] || colorToHex.blue;
  return L.divIcon({
    className: "",
    html: `<div style="
      width: 24px; height: 24px; border-radius: 50%;
      background: ${hex}; border: 3px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -14],
  });
};

const DowntownMap = ({ markers, height = "200px", className = "" }: DowntownMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Clean up previous instance
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const map = L.map(mapRef.current, {
      zoomControl: false,
      attributionControl: false,
    }).setView([43.5448, -80.2490], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    markers.forEach((m) => {
      const marker = L.marker([m.lat, m.lng], { icon: createIcon(m.color) }).addTo(map);
      if (m.popup) {
        marker.bindPopup(
          `<div style="font-size:12px;line-height:1.4;max-width:180px;">
            <strong>${m.label}</strong><br/>${m.popup}
          </div>`
        );
      } else {
        marker.bindPopup(`<strong style="font-size:12px;">${m.label}</strong>`);
      }
    });

    if (markers.length > 1) {
      const bounds = L.latLngBounds(markers.map((m) => [m.lat, m.lng]));
      map.fitBounds(bounds, { padding: [30, 30] });
    }

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [markers]);

  return (
    <div
      ref={mapRef}
      style={{ height }}
      className={`rounded-xl overflow-hidden border border-border ${className}`}
    />
  );
};

export default DowntownMap;
