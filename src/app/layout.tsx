import type { Metadata } from "next";
import React from "react";
// components
import Layout from "./components/Layout";

export const metadata: Metadata = {
  title: "Azuki powered Subgraph | GraphRising",
  description:
    "A subgraph powered DApp showcasing the capabilities of The Graph 💪💪💪",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
