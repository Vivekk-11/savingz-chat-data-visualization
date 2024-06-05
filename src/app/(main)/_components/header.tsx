import { DataToggle } from "@/components/data-toggle";
import { ModeToggle } from "@/components/mode-toggle";

export const Header = () => {
  return (
    <header className="w-full h-[10vh] my-4 flex items-center justify-between">
      <h2>Chat Data</h2>
      <div className="flex items-center gap-4">
        <DataToggle />
        <ModeToggle />
      </div>
    </header>
  );
};
