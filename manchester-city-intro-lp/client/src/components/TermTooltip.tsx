import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react";

interface TermTooltipProps {
  term: string;
  description: string;
}

export function TermTooltip({ term, description }: TermTooltipProps) {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <span className="cursor-help border-b border-dashed border-primary/60 hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-0.5 group">
          {term}
          <Info className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-card border-primary/20 shadow-xl">
        <div className="space-y-2">
          <h4 className="text-sm font-mono font-bold text-primary flex items-center gap-2">
            <Info className="h-4 w-4" />
            KEYWORD
          </h4>
          <p className="text-sm font-bold text-foreground">{term}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
