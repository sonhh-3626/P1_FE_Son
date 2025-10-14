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
  return (
    <div className="text-gray-600">
      Showing {startIndex}-{endIndex} of {totalResults} results
    </div>
  );
};
