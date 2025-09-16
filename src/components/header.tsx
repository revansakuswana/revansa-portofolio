import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 border-b bg-background">
      <div className="h-14 max-w-7xl mx-auto flex items-center justify-between px-8 border-x">
        <div className="flex items-center justify-between gap-2">
          <span className="text-md font-semibold tracking-wider text-foreground">
            Revansa Helsa Kuswana.
          </span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
