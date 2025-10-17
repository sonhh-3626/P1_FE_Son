import { useTranslation } from "react-i18next";

interface OrderNotes {
  orderNotes?: string;
}

export default function OrderNotes({ orderNotes }: OrderNotes) {
  const { t } = useTranslation();

  if (!orderNotes) return null;

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">{t('order.notes')}</h2>
      <p>{orderNotes}</p>
    </>
  );
}
