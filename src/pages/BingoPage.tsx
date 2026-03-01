import { useState } from "react";
import { bingoSquares as initialSquares } from "@/data/static-data";
import { Check, QrCode, Trophy } from "lucide-react";

const BingoPage = () => {
  const [squares, setSquares] = useState(initialSquares);

  const completedCount = squares.filter((s) => s.completed).length;
  const totalCount = squares.length;

  const toggleSquare = (id: string) => {
    setSquares((prev) =>
      prev.map((s) => (s.id === id ? { ...s, completed: !s.completed } : s))
    );
  };

  return (
    <div className="animate-fade-in">
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold">Downtown Bingo</h1>
        <p className="text-sm text-muted-foreground mt-1">Visit businesses & complete your card!</p>
      </div>

      {/* Progress */}
      <div className="px-4 mb-4">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
          <Trophy className="w-5 h-5 text-accent" />
          <div className="flex-1">
            <p className="text-sm font-semibold">
              {completedCount}/{totalCount} Complete
            </p>
            <div className="mt-1.5 h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bingo grid */}
      <div className="px-4 pb-6">
        <div className="grid grid-cols-3 gap-2">
          {squares.map((square, i) => (
            <button
              key={square.id}
              onClick={() => toggleSquare(square.id)}
              className={`relative aspect-square rounded-xl border-2 p-2 flex flex-col items-center justify-center text-center transition-all animate-slide-up ${
                square.completed
                  ? "bg-primary border-primary text-primary-foreground shadow-lg"
                  : "bg-card border-border hover:border-primary/40"
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {square.completed && (
                <div className="absolute top-1.5 right-1.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
              )}
              <span className="text-[10px] font-bold leading-tight mb-0.5">
                {square.businessName}
              </span>
              <span className={`text-[9px] leading-tight ${square.completed ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {square.task}
              </span>
            </button>
          ))}
        </div>

        {/* QR hint */}
        <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-muted border border-border">
          <QrCode className="w-5 h-5 text-muted-foreground shrink-0" />
          <p className="text-xs text-muted-foreground">
            Visit participating businesses and scan their QR code to check in automatically!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BingoPage;
