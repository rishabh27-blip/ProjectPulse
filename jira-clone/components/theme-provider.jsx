// components/theme-provider.jsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => null,
});

export function ThemeProvider({ children, defaultTheme = "dark", storageKey = "theme" }) {
  // Use state instead of useState to avoid hydration mismatch
  const [theme, setTheme] = useState(undefined);
  
  useEffect(() => {
    // Only run on the client side
    const root = window.document.documentElement;
    const initialTheme = root.classList.contains("dark") 
      ? "dark" 
      : root.classList.contains("light") 
        ? "light" 
        : defaultTheme;
    
    setTheme(initialTheme);
    
    // Apply the theme class to the html element
    if (initialTheme === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  }, [defaultTheme]);

  const value = {
    theme,
    setTheme: (newTheme) => {
      const root = window.document.documentElement;
      
      // Remove the previous theme class
      root.classList.remove(theme);
      
      // Add the new theme class
      root.classList.add(newTheme);
      
      // Update the color-scheme
      root.style.colorScheme = newTheme;
      
      // Store the theme preference
      localStorage.setItem(storageKey, newTheme);
      
      // Update state
      setTheme(newTheme);
    },
  };

  // Return children directly during initial server render to avoid hydration mismatch
  if (theme === undefined) {
    return children;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};