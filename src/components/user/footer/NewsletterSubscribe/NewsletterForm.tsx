import React, { useState, useCallback } from 'react';
import { FiMail } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import styles from './NewsletterForm.module.css';

interface NewsletterFormProps {
  onSubmit?: (email: string) => void;
}

export default function NewsletterForm({ onSubmit } : NewsletterFormProps) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    }
    setEmail('');
  }, [onSubmit, email]);

  return (
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <FiMail className={styles.mailIcon} />
            <input
              type="email"
              placeholder={t('footer.newsletter.placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required

              className={styles.inputField}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            {t('footer.newsletter.sendButton')}
          </button>
        </form>

        <p className={styles.termsText}>
          {t('footer.newsletter.agreementPrefix')}
          <a href="/terms" className={styles.termsLink}>{t('footer.newsletter.termsLink')}</a>
          {' '}{t('footer.newsletter.and')}
          <a href="/privacy" className={styles.termsLink}>{t('footer.newsletter.privacyLink')}</a>.
        </p>
      </div>
  );
};
