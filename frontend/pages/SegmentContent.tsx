// SegmentContent.tsx
import React from "react";
import styles from "../styles/Landing.module.css";

interface SegmentContentProps {
  title: string;
  description: string;
}

const SegmentContent: React.FC<SegmentContentProps> = ({ title, description }) => {
  return (
    <div className={styles.placeholder}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SegmentContent;
