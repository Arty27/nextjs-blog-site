"use client";
import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from "next-themes";
import Header from "../layout/header";
import { cn } from "@/lib/utils";

interface ExtendedThemeProvider extends ThemeProviderProps {
  children: React.ReactNode;
  containerClassName?: string;
}

export function ThemeProvider({
  children,
  containerClassName,
  ...props
}: ExtendedThemeProvider) {
  return (
    <NextThemeProvider {...props}>
      <Header>
        <main className={cn("container mx-auto px-4", containerClassName)}>
          {children}
        </main>
      </Header>
    </NextThemeProvider>
  );
}
