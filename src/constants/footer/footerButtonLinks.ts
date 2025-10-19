interface LinkItem {
  text: string;
  href: string;
}

export const DEFAULT_BOTTOM_LINKS: LinkItem[] = [
  { text: 'footer.termsAndConditions', href: '/terms' },
  { text: 'footer.privacyPolicy', href: '/privacy' },
  { text: 'footer.orderTracking', href: '/order-tracking' },
];
