import NewsletterInfo from './NewsletterInfo';
import NewsletterForm from './NewsletterForm';

import styles from './NewsletterSubscribe.module.css';

export default function NewsletterSubscribe() {
  return (
    <div className={styles.newsletterContainer}>
      <NewsletterInfo />
      <NewsletterForm />
    </div>
  );
};
