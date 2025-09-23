import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/YouTubeConnect.module.css";
import { FaYoutube } from "react-icons/fa";

const YouTubeConnect = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleConnectYouTube = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/youtube/connect", {
        method: "POST",
        credentials: "include", // Important: sends session cookie
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Failed to initiate connection. Please try again.");
        setLoading(false);
        return;
      }

      const data = await response.json();

      if (data.authUrl) {
        // Redirect user to Google OAuth consent screen
        window.location.href = data.authUrl;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Connection error:", error);
      alert("Unable to connect to YouTube. Check your internet or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <FaYoutube className={styles.youtubeIcon} />
          <h1>Connect Your YouTube Account</h1>
          <p className={styles.subtitle}>
            Upload, schedule, and analyze your videos — all from one powerful dashboard.
          </p>
        </div>

        <div className={styles.benefits}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>🎬</div>
            <div>
              <h3>Upload & Schedule Videos</h3>
              <p>Plan your content calendar and auto-publish at the best times.</p>
            </div>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>📊</div>
            <div>
              <h3>Track Views & Watch Time</h3>
              <p>See what’s working and double down on high-performing content.</p>
            </div>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>✍️</div>
            <div>
              <h3>AI Title & Description Generator</h3>
              <p>Boost SEO and CTR with AI-optimized titles and descriptions.</p>
            </div>
          </div>
        </div>

        <div className={styles.trustSection}>
          <p>🔒 Secure connection via YouTube’s official API</p>
          <p>🚫 We never upload or edit without your approval</p>
        </div>

        <button
          className={styles.connectButton}
          onClick={handleConnectYouTube}
          disabled={loading}
        >
          <FaYoutube />
          {loading ? "Connecting..." : "Connect to YouTube"}
        </button>

        <div className={styles.footerNote}>
          <p>
            By connecting, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YouTubeConnect;