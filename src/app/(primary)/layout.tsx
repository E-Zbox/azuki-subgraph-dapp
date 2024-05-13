"use client";
import React from "react";
// components
import Navbar from "@/app/components/navbar";
// styles
import { MainApp, MainPrimaryApp } from "@/app/styles/App.styles";
// utils
import { screens } from "@/utils/data";

export default function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    default: {
      assets: { theGraphImg },
    },
  } = screens;

  return (
    <>
      <MainApp $bgImg={theGraphImg.src}>
        <Navbar />
        <MainPrimaryApp>{children}</MainPrimaryApp>
      </MainApp>
    </>
  );
}
