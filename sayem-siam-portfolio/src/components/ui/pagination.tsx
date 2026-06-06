"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-2", className)}
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-10 w-10 items-center justify-center border-2 border-black bg-white transition-all hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-label={`Go to page ${page}`}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex h-10 w-10 items-center justify-center border-2 border-black text-sm font-bold transition-all",
              isActive
                ? "bg-black text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                : "bg-white text-black hover:bg-amber-200",
            )}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-10 w-10 items-center justify-center border-2 border-black bg-white transition-all hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
