import React, { useState } from "react";
import LHeader from "./LHeader";
import Sidebar from "./Sidebar";
import styles from "../styles/Landing.module.css";

// Import pages
import Create from "./Create";
import Templates from "./Templates";
import Publish from "./Publish";
import Planning from "./Planning";
import Analytics from "./Analytics";
import Summary from "./Summary";
import YouTubeConnect from "./YouTubeConnect";
import InstagramConnect from "./InstagramConnect";
import FacebookConnect from "./FacebookConnect";
import TwitterConnect from "./TwitterConnect";
import LinkedInConnect from "./LinkedInConnect";
import PinterestConnect from "./PinterestConnect";
import ThreadsConnect from "./ThreadsConnect";



const Landing = () => {
  const [activeSegment, setActiveSegment] = useState("Create");
  const [activePlatform, setActivePlatform] = useState<string | null>(null);

  const renderContent = () => {
    if (activePlatform) {
      switch (activePlatform) {
        case "youtube":
          return <YouTubeConnect />;
        case "instagram":
          return <InstagramConnect />;
        case "facebook":
          return <FacebookConnect />;
        case "twitter":
          return <TwitterConnect />;
        case "linkedin":
          return <LinkedInConnect />;
        case "pinterest":
          return <PinterestConnect />;
        case "threads":
          return <ThreadsConnect />;
        default:
          return <div>Select a platform</div>;
      }
    }

    switch (activeSegment) {
      case "Create":
        return <Create />;
      case "Templates":
        return <Templates />;
      case "Publish":
        return <Publish />;
      case "Planning":
        return <Planning />;
      case "Analytics":
        return <Analytics />;
      case "Summary":
        return <Summary />;
      default:
        return <div>Welcome</div>;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <LHeader setActivePlatform={setActivePlatform} />
      </header>

      <div className={styles.main}>
        <Sidebar
          activeSegment={activeSegment}
          setActiveSegment={setActiveSegment}
          activePlatform={activePlatform}
        />
        <main className={styles.content}>{renderContent()}</main>
      </div>
    </div>
  );
};

export default Landing;
