import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Clock, CheckCircle2 } from "lucide-react";

export interface DropoffPoint {
  id: string;
  name: string;
  address: string;
  distance: string;
  status: "open" | "closed";
  hours: string;
}

interface DropoffPointCardProps {
  point: DropoffPoint;
  onSelect?: (id: string) => void;
}

export function DropoffPointCard({ point, onSelect }: DropoffPointCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#22C55E]" />
              </div>
              <div>
                <h4 className="mb-1">{point.name}</h4>
                <p className="text-[#64748B]">{point.address}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[#64748B]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{point.distance}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{point.hours}</span>
              </div>
              <div className={`flex items-center gap-2 ${
                point.status === 'open' ? 'text-[#22C55E]' : 'text-[#EF4444]'
              }`}>
                <CheckCircle2 className="w-4 h-4" />
                <span>{point.status === 'open' ? 'Open' : 'Closed'}</span>
              </div>
            </div>
          </div>

          {onSelect && (
            <Button 
              onClick={() => onSelect(point.id)}
              disabled={point.status === 'closed'}
              variant={point.status === 'open' ? 'default' : 'secondary'}
            >
              Drop Here
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
