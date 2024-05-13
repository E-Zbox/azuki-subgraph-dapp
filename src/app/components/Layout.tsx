"use client";
import { Inter } from "next/font/google";
import React from "react";
import { ThemeProvider } from "styled-components";
// lib/registry
import StyledComponentsRegistry from "@/lib/registry";
// styles
import GlobalStyles from "@/app/styles/Global.styles";
// utils
import { devices, theme } from "@/utils/data";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={{ ...theme.dark, ...devices }}>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css?family=Source Sans Pro&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Macondo&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className={inter.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
      <GlobalStyles theme={theme.dark} />
    </ThemeProvider>
  );
};

export default Layout;
