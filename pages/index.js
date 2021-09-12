import React from "react";
import ThemeProvider from "../components/ThemeProvider";
import homeStyle from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={homeStyle.container}>
        <ThemeProvider />
      </div>
      <div className={homeStyle.container}>
        <div className={homeStyle.colorViewerWrapper}>
          <div
            className={`${homeStyle.colorViewer} ${homeStyle.background}`}
          ></div>
          <div className={`${homeStyle.colorViewer} ${homeStyle.color}`}></div>
          <div
            className={`${homeStyle.colorViewer} ${homeStyle.secondary}`}
          ></div>
          <div className={`${homeStyle.colorViewer} ${homeStyle.success}`}></div>
          <div className={`${homeStyle.colorViewer} ${homeStyle.danger}`}></div>
        </div>
      </div>
    </>
  );
}
