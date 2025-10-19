import { useTranslation } from 'react-i18next';

interface ResultSummaryProps {
  startIndex: number;
  endIndex: number;
  totalResults: number;
}

export default function ResultSummary ({
  startIndex,
  endIndex,
  totalResults,
} : ResultSummaryProps) {
  const { t } = useTranslation();

  return (
    <div className="text-gray-600">
      {t('showing_results', { startIndex, endIndex, totalResults })}
    </div>
  );
};
