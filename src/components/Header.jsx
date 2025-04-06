import React from "react";
import styles from "./Header.module.css";
import { Icon } from "semantic-ui-react";

const steps = [
  { label: "Postcode", icon: "map marker alternate" },
  { label: "Waste Type", icon: "trash alternate" },
  { label: "Select Skip", icon: "truck" },
  { label: "Permit Check", icon: "shield alternate" },
  { label: "Choose Date", icon: "calendar alternate" },
  { label: "Payment", icon: "credit card" },
];

export default function Header({ currentStep = "Select Skip" }) {
  return (
    <div className={styles.progressWrapper}>
      {steps.map((step, index) => {
        const isActive = index <= 2;
        return (
          <div key={step.label} className={styles.step}>
            <Icon
              name={step.icon}
              className={`${styles.icon} ${isActive ? styles.active : ""}`}
            />
            <span className={isActive ? styles.active : ""}>{step.label}</span>
            {index < steps.length - 1 && (
              <div className={styles.separator}>_________</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
