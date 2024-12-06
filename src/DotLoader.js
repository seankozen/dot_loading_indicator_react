import React from "react";
import styles from "./DotLoader.module.css";

const DotLoader = () => {
  return (
    
      <div className={styles.dot_loader}>
        <span className={styles.dot_loader_balls}></span>
        <span className={styles.dot_loader_balls}></span>
        <span className={styles.dot_loader_balls}></span>
        <span className={styles.dot_loader_balls}></span>
        <span className={styles.dot_loader_balls}></span>
        <span className={styles.dot_loader_balls}></span>
      </div>
    
  );
};

export default DotLoader;
