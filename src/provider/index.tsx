"use client";
import { ThemeProvider } from "@/components/tools/ThemeProvider";
import { AppContextProvider, useMode } from "@/context/app.context";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AppContextProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        forcedTheme="light"
        disableTransitionOnChange
      >
        <ThemeWrapper>{children}</ThemeWrapper>
      </ThemeProvider>
    </AppContextProvider>
  );
};

export default Provider;

const ThemeWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { theme } = useTheme();
  const { setMode } = useMode();
  useEffect(() => {
    if (theme) {
      setMode(theme);
    }
  }, [theme, setMode]);
  return <>{children}</>;
};
