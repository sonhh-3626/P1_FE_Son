import { memo } from 'react';
import ContactInfo from './ContactInfo';
import FooterLinkList from './FooterLinkList';
import AppDownload from './AppDownload';
import SocialMediaLinks from './SocialMediaLinks';
import styles from './MoreInfo.module.css';

interface LinkItem {
  title: string;
  href: string;
}

const makeMoneyLinks: LinkItem[] = [
  { title: 'footer.linkLists.makeMoney.sellOnGrogin', href: '#' },
  { title: 'footer.linkLists.makeMoney.sellYourServices', href: '#' },
  { title: 'footer.linkLists.makeMoney.sellOnGroginBusiness', href: '#' },
  { title: 'footer.linkLists.makeMoney.sellYourAppsOnGrogin', href: '#' },
  { title: 'footer.linkLists.makeMoney.becomeAnAffiliate', href: '#' },
  { title: 'footer.linkLists.makeMoney.advertiseYourProducts', href: '#' },
  { title: 'footer.linkLists.makeMoney.sellPublishWithUs', href: '#' },
  { title: 'footer.linkLists.makeMoney.becomeAnBlowwieVendor', href: '#' },
];

const letUsHelpYouLinks: LinkItem[] = [
  { title: 'footer.linkLists.helpYou.accessibilityStatement', href: '#' },
  { title: 'footer.linkLists.helpYou.yourOrders', href: '#' },
  { title: 'footer.linkLists.helpYou.returnsAndReplacements', href: '#' },
  { title: 'footer.linkLists.helpYou.shippingRatesAndPolicies', href: '#' },
  { title: 'footer.linkLists.helpYou.refundAndReturnsPolicy', href: '#' },
  { title: 'footer.linkLists.helpYou.privacyPolicy', href: '#' },
  { title: 'footer.linkLists.helpYou.termsAndConditions', href: '#' },
  { title: 'footer.linkLists.helpYou.cookieSettings', href: '#' },
  { title: 'footer.linkLists.helpYou.helpCenter', href: '#' },
];

const getToKnowUsLinks: LinkItem[] = [
  { title: 'footer.linkLists.getKnowUs.careersForGrogin', href: '#' },
  { title: 'footer.linkLists.getKnowUs.aboutGrogin', href: '#' },
  { title: 'footer.linkLists.getKnowUs.investorRelations', href: '#' },
  { title: 'footer.linkLists.getKnowUs.groginDevices', href: '#' },
  { title: 'footer.linkLists.getKnowUs.customerReviews', href: '#' },
  { title: 'footer.linkLists.getKnowUs.socialResponsibility', href: '#' },
  { title: 'footer.linkLists.getKnowUs.storeLocations', href: '#' },
];


function MoreInfo() {
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

export default memo(MoreInfo);
