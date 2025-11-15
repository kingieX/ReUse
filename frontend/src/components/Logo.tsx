import { Recycle } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#22C55E] to-[#84CC16] flex items-center justify-center">
        <Recycle className="w-6 h-6 text-white" />
      </div>
      <span className="text-[#14532D] tracking-tight">ReUse</span>
    </div>
  );
}
