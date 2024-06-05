"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export const DataToggle = () => {
  const { push } = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <p className="text-[10px]">Sort By</p>
          <span className="sr-only">Sort By</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => push("?sortBy=latest")}>
          Latest Chats
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => push("?sortBy=number")}>
          Number of Chats
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
