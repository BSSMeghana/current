import React from "react";
import styles from "../styles/lheader.module.css";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { SiThreads } from "react-icons/si";

interface LHeaderProps {
  setActivePlatform: (platform: string | null) => void;
}

const LHeader: React.FC<LHeaderProps> = ({ setActivePlatform }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>☐ LOGO</div>

      <div className={styles.channels}>
        <button
          className={styles.channelIcon}
          data-platform="instagram"
          onClick={() => setActivePlatform("instagram")}
          aria-label="Instagram"
        >
          <span aria-hidden="true"><FaInstagram /></span>
        </button>
        <button
          className={styles.channelIcon}
          data-platform="twitter"
          onClick={() => setActivePlatform("twitter")}
          aria-label="Twitter"
        >
          <span aria-hidden="true"><FaTwitter /></span>
        </button>
        <button
          className={styles.channelIcon}
          data-platform="youtube"
          onClick={() => setActivePlatform("youtube")}
          aria-label="YouTube"
        >
          <span aria-hidden="true"><FaYoutube /></span>
        </button>
        <button
          className={styles.channelIcon}
          data-platform="linkedin"
          onClick={() => setActivePlatform("linkedin")}
          aria-label="LinkedIn"
        >
          <span aria-hidden="true"><FaLinkedinIn /></span>
        </button>
        <button
          className={styles.channelIcon}
          data-platform="pinterest"
          onClick={() => setActivePlatform("pinterest")}
          aria-label="Pinterest"
        >
          <span aria-hidden="true"><FaPinterestP /></span>
        </button>
        <button
          className={styles.channelIcon}
          data-platform="facebook"
          onClick={() => setActivePlatform("facebook")}
          aria-label="Facebook"
        >
          <span aria-hidden="true"><FaFacebookF /></span>
        </button>
        <button
          className={styles.channelIcon}
          data-platform="threads"
          onClick={() => setActivePlatform("threads")}
          aria-label="Threads"
        >
          <span aria-hidden="true"><SiThreads /></span>
        </button>
      </div>

      <div className={styles.actions}>
        <button
          className={styles.newPostButton}
          onClick={() => setActivePlatform(null)}
        >
          + New Post
        </button>
        <button className={styles.help} aria-label="Help">
          ⭐️
        </button>
        <button className={styles.profilePic} aria-label="Profile">
          <span className={styles.profileInitial}>U</span>
        </button>
      </div>
    </header>
  );
};

export default LHeader;