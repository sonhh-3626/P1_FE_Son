import NewsletterSubscribe from './NewsletterSubscribe/NewsletterSubscribe';
import MoreInfo from './MoreInfo/MoreInfo';
import FooterBottom from './FooterBotton/FooterBottom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 pb-10 text-gray-800 font-sans">
      <NewsletterSubscribe />
      <MoreInfo />
      <FooterBottom />
    </footer>
  );
};
