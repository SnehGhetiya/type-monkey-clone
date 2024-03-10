"use client";

import type { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import { Check, ClipboardIcon } from "lucide-react";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  copied: boolean;
};

const CopyToClipboard: FC<Props> = ({ onClick, copied }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" className="h-full" onClick={onClick}>
          {!copied ? (
            <ClipboardIcon className="h-10 w-5" />
          ) : (
            <Check className="h-10 wo-5" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {!copied ? <p>Click to copy</p> : <p>Copied!</p>}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default CopyToClipboard;
