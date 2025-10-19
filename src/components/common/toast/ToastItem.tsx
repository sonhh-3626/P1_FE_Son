import React, { useState } from "react";
import type { Toast } from "../../../types/Toast";
import { TOAST_DURATION_DEFAULT } from "../../../constants/toastDuration";

interface ToastItem {
  toast: Toast;
  onClose: () => void;
}

export default function ToastItem({ toast, onClose }: ToastItem) {
  const { id, type = "info", title, message, duration = TOAST_DURATION_DEFAULT } = toast;
  const [progress, setProgress] = useState(100);
  const [paused, setPaused] = useState(false);

  React.useEffect(() => {
    let start = Date.now();
    let rafId: number;

    const tick = () => {
      if (!paused) {
        const elapsed = Date.now() - start;
        const pct = Math.max(0, 100 - (elapsed / duration) * 100);
        setProgress(pct);
        if (pct <= 0) {
          onClose();
          return;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [duration, onClose, paused]);

  const colorClasses =
    type === "success"
      ? "bg-emerald-50 border-emerald-200"
      : type === "error"
      ? "bg-rose-50 border-rose-200"
      : "bg-slate-50 border-slate-200";

  const accent =
    type === "success" ? "text-emerald-700" : type === "error" ? "text-rose-700" : "text-slate-700";

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={`w-80 max-w-full border ${colorClasses} shadow-sm rounded-lg overflow-hidden transform transition duration-200 ease-out translate-y-0 opacity-100`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start p-3">
        <div className={`flex-shrink-0 mt-0.5 ${accent} mr-3`}>
          {type === "success" ? "✅" : type === "error" ? "⚠️" : "ℹ️️"}
        </div>

        <div className="flex-1 min-w-0">
          {title && <div className={`text-sm font-semibold ${accent}`}>{title}</div>}
          <div className="mt-1 text-xs text-slate-700 break-words">{message}</div>
        </div>

        <button
          onClick={onClose}
          aria-label="Close toast"
          className="ml-3 inline-flex text-slate-400 hover:text-slate-600 focus:outline-none"
        >
          ✕
        </button>
      </div>

      <div className="h-[4px] bg-transparent">
        <div
          className={`h-full ${type === "success" ? "bg-emerald-500" : type === "error" ? "bg-rose-500" : "bg-slate-500"}`}
          style={{ width: `${progress}%`, transition: "width 120ms linear" }}
        />
      </div>
    </div>
  );
};
