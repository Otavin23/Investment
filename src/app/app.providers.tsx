"use client";

import { DataMediaProvider } from "@/context/DataMedia";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProps) {
  return (
    <DataMediaProvider>
      <>{children}</>
    </DataMediaProvider>
  );
}
