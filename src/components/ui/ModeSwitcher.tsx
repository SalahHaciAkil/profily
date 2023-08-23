"use client";
import Button from "@/components/ui/Button";
import React, { useEffect } from "react";

function ModeSwitcher() {
  const [isDark, setIsDark] = React.useState(false);
  useEffect(() => {
    if (isDark) return document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("dark");
  }, [isDark]);
  return (
    <div className="fixed top-2 right-3/4">
      <Button
        onClick={() => {
          if (isDark) return setIsDark(false);
          else setIsDark(true);
        }}
      >
        {isDark ? "L" : "D"}
      </Button>
    </div>
  );
}

export default ModeSwitcher;
