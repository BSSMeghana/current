// frontend/pages/connect-youtube.tsx
import React from "react";
import styles from "../styles/Home.module.css";
import { withAuth } from "../utils/withAuth";
import { GetServerSideProps } from "next";

const ConnectYouTubePage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Connect Your YouTube Account</h1>
        <p>Before uploading videos, please connect your YouTube account.</p>
        <button className={styles.button}>
          Connect to YouTube
        </button>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});

export default ConnectYouTubePage;
