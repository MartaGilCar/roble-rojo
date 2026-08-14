"use client";

import { MantineProvider } from "@mantine/core";
import { robleRojoTheme } from "@/lib/mantine/theme";

export function AppMantineProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider withGlobalClasses theme={robleRojoTheme}>
      {children}
    </MantineProvider>
  );
}
