export default function TimeBox({time}: {time: number}) {
  return (
    <span className="bg-gray-100 border-1 border-gray-200 px-1.5 py-0.5 rounded">{time}</span>
  );
}
