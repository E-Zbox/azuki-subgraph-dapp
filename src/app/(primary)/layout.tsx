"use client";
import React, { useEffect, useState } from "react";
// components
import Navbar from "@/app/components/navbar";
// styles
import { MainApp, MainPrimaryApp } from "@/app/styles/App.styles";
import { Loader } from "../styles/Loader.styles";
// utils
import { screens } from "@/utils/data";

export default function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  const {
    default: {
      assets: { theGraphImg, loaderGif },
    },
  } = screens;

  const loadEventListener = () => {
    setLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", loadEventListener);

    return () => window.removeEventListener("load", loadEventListener);
  }, []);

  return (
    <>
      <MainApp $bgImg={theGraphImg.src}>
        {loading ? (
          <Loader
            src={loaderGif.src}
            alt={loaderGif.src.substring(0, 11)}
            $size={"80px"}
          />
        ) : (
          <>
            <Navbar />
            <MainPrimaryApp>{children}</MainPrimaryApp>
          </>
        )}
      </MainApp>
    </>
  );
}
