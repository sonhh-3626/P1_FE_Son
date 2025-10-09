import ContactInfo from './ContactInfo';
import FooterLinkList from './FooterLinkList';
import AppDownload from './AppDownload';
import SocialMediaLinks from './SocialMediaLinks';
import styles from './MoreInfo.module.css';
import { makeMoneyLinks, letUsHelpYouLinks, getToKnowUsLinks } from '../../../../constants/footer/moreInfoButton';

export default function MoreInfo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoGrid}>
        <ContactInfo />
        <FooterLinkList titleKey="footer.linkLists.makeMoney.title" links={makeMoneyLinks} />
        <FooterLinkList titleKey="footer.linkLists.helpYou.title" links={letUsHelpYouLinks} />
        <FooterLinkList titleKey="footer.linkLists.getKnowUs.title" links={getToKnowUsLinks} />

        <div className={styles.appSocialGroup}>
            <AppDownload />
            <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
};
