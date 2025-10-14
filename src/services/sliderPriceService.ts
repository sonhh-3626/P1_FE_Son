export const valueToPercent = (value: number, min: number, max: number): string => {
  if (max === min) return '0%';
  const percentage = ((value - min) / (max - min)) * 100;
  return `${percentage}%`;
};

export const pixelToValue = (
  clientX: number,
  sliderRect: DOMRect,
  min: number,
  max: number
): number => {
  const clickPosition = clientX - sliderRect.left;
  const sliderWidth = sliderRect.width;
  const valueRange = max - min;
  const ratio = Math.max(0, Math.min(1, clickPosition / sliderWidth));
  return Math.round(min + ratio * valueRange);
};
