"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Create", href: "/post/create" },
  ];
  return (
    <header className="border border-b bg-background sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href={"/"} className="font-extrabold">
            BlogNext
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            {/* Keep placeholder for search */}
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => router.push("/auth")}
              className="cursor-pointer"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
