import { memo } from 'react';
import NewsletterInfo from './NewsletterInfo';
import NewsletterForm from './NewsletterForm';
// Import CSS Modules
import styles from './NewsletterSubscribe.module.css';

// Định nghĩa component bằng function
function NewsletterSubscribe() {
  return (
    // Sử dụng class từ CSS Modules để làm gọn styling và xử lý responsive layout
    <div className={styles.newsletterContainer}>
      <NewsletterInfo />
      <NewsletterForm />
    </div>
  );
};

// 💥 Tối ưu hóa Hiệu suất (Performance Optimization)
// Sử dụng memo để ngăn component re-render khi không có props (dependency) thay đổi.
export default memo(NewsletterSubscribe);
