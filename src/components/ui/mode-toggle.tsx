import { useTheme } from "@/components/theme-provider.tsx";
import { Button } from "@/components/ui/button";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="overflow-hidden rounded-4xl">
      <IconSun
        className={`h-[1.2rem] w-[1.2rem] text-foreground transition-all duration-500 ${
          theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <IconMoon
        className={`absolute h-[1.2rem] w-[1.2rem] text-foreground transition-all duration-500 ${
          theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
    </Button>
  );
}
