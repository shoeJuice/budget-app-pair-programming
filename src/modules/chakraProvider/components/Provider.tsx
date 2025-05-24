"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

import { ReactNode } from "react";

/**
 * Provider component that wraps the application with ChakraProvider and ThemeProvider.
 * This component is used to provide the Chakra UI theme and the Next.js theme context
 * to the entire application. All children components will have access to the theme and
 * Chakra UI functionality.
 * 
 * NOTE: This component is essential for the ChakraUI components to work properly.
 */
export default function Provider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
