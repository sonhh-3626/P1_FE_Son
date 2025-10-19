import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle ({ title, subtitle }: SectionTitleProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {title}
      </h2>
      {subtitle && (
        <div className={styles.subtitle}>
          {subtitle}
        </div>
      )}
    </div>
  );
};
