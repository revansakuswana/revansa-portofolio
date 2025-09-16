import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconMailOpened } from "@tabler/icons-react";
import { toast } from "sonner";
import { Toaster } from "sonner";

export default function Footer() {
  const handleCopy = () => {
    navigator.clipboard.writeText("revansakuswana@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  return (
    <footer className="w-full mx-auto items-center gap-10 text-center border-t border-x">
      <div className="flex flex-col items-center p-8 lg:p-10">
        <h2 className="text-3xl md:text-4xl special-gothic-expanded-one-regular font-bold mb-4 tracking-tighter">
          That's a wrap!
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Thanks for scrolling this far – you're awesome. Got an idea or just
          wanna say hi? My inbox is always open!
        </p>

        <div className="flex flex-wrap justify-start gap-1 sm:gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="hover:underline"
                  onClick={handleCopy}>
                  <IconMailOpened className="h-4 w-4" />
                  revansakuswana@gmail.com
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to copy!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <Toaster richColors />
    </footer>
  );
}
