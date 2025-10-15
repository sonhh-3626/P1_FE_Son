import React, { useState, useCallback, useRef, useEffect } from 'react';
import { valueToPercent, pixelToValue } from '../../../services/sliderPriceService';

interface PriceSliderProps {
  min: number;
  max: number;
  currentRange: [number, number];
  onRangeChange: (newRange: [number, number]) => void;
  unit?: string;
}

export default function PriceSlider({
  min,
  max,
  currentRange,
  onRangeChange,
  unit = '',
}: PriceSliderProps) {
  const [currentMin, currentMax] = currentRange;
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);

  const currentRangeRef = useRef(currentRange);
  const onRangeChangeRef = useRef(onRangeChange);

  useEffect(() => {
    currentRangeRef.current = currentRange;
    onRangeChangeRef.current = onRangeChange;
  }, [currentRange, onRangeChange]);

  const handleThumbDrag = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, isMinThumb: boolean) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(isMinThumb ? 'min' : 'max');

      const sliderElement = e.currentTarget.parentNode as HTMLElement;
      if (!sliderElement) return;

      const sliderRect = sliderElement.getBoundingClientRect();

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const newValue = pixelToValue(moveEvent.clientX, sliderRect, min, max);
        const [refMin, refMax] = currentRangeRef.current;

        if (isMinThumb) {
          const newMin = Math.min(newValue, refMax);
          onRangeChangeRef.current([newMin, refMax]);
        } else {
          const newMax = Math.max(newValue, refMin);
          onRangeChangeRef.current([refMin, newMax]);
        }
      };

      const handleMouseUp = () => {
        setIsDragging(null);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [min, max]
  );

  const handleTrackClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isDragging) return;

      const sliderElement = e.currentTarget as HTMLElement;
      const sliderRect = sliderElement.getBoundingClientRect();
      const newValue = pixelToValue(e.clientX, sliderRect, min, max);
      const [refMin, refMax] = currentRangeRef.current;

      const distToMin = Math.abs(newValue - refMin);
      const distToMax = Math.abs(newValue - refMax);

      if (distToMin <= distToMax) {
        const newMin = Math.min(newValue, refMax);
        onRangeChangeRef.current([newMin, refMax]);
      } else {
        const newMax = Math.max(newValue, refMin);
        onRangeChangeRef.current([refMin, newMax]);
      }
    },
    [min, max, isDragging]
  );

  const minPercent = valueToPercent(currentMin, min, max);
  const maxPercent = valueToPercent(currentMax, min, max);
  const filledBarLeft = minPercent;
  const filledBarRight = `${100 - parseFloat(maxPercent)}%`;

  return (
    <div className="my-4 w-full pr-2">
      <div
        className="h-[4px] bg-gray-300 rounded-full relative cursor-pointer select-none"
        onMouseDown={handleTrackClick}
      >
        <div
          className="absolute top-0 h-[4px] bg-[#0f1623] rounded-full pointer-events-none"
          style={{ left: filledBarLeft, right: filledBarRight }}
        ></div>

        <div
          className={`absolute top-1/2 w-[14px] h-[14px] bg-[#0f1623] rounded-full -translate-y-1/2 -translate-x-1/2 transition-transform duration-100 ${
            isDragging === 'min' ? 'scale-110 cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ left: minPercent }}
          onMouseDown={(e) => handleThumbDrag(e, true)}
        ></div>

        <div
          className={`absolute top-1/2 w-[14px] h-[14px] bg-[#0f1623] rounded-full -translate-y-1/2 -translate-x-1/2 transition-transform duration-100 ${
            isDragging === 'max' ? 'scale-110 cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ left: maxPercent }}
          onMouseDown={(e) => handleThumbDrag(e, false)}
        ></div>
      </div>

      <div className="flex justify-between mt-2 text-xs text-gray-600">
        <span>
          {unit}
          {min}
        </span>
        <span>
          {unit}
          {max}
        </span>
      </div>
    </div>
  );
}
