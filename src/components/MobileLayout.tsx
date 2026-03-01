import { NavLink, Outlet } from "react-router-dom";
import { Home, Construction, Store, Car, Grid3X3 } from "lucide-react";

const tabs = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/construction", icon: Construction, label: "Updates" },
  { to: "/directory", icon: Store, label: "Directory" },
  { to: "/parking", icon: Car, label: "Parking" },
  { to: "/bingo", icon: Grid3X3, label: "Bingo" },
];

const MobileLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 pb-20 overflow-y-auto">
        <Outlet />
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border safe-bottom z-50">
        <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
          {tabs.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default MobileLayout;
