import React from "react";
import styles from "./Footer.module.css";
import { Button } from "semantic-ui-react";

export default function Footer({ btnDisabled, price }) {
  return (
    <div className={styles.footer}>
      {price && <div className={styles.price}>£{price}</div>}
      <div className={styles.buttonGroup}>
        <Button primary className={styles.backButton}>
          Back
        </Button>
        <Button
          primary
          className={`${
            btnDisabled ? styles.continueDisabled : styles.continueButton
          }`}
        >
          Continue <span className={styles.arrow}>&rarr;</span>
        </Button>
      </div>
    </div>
  );
}
