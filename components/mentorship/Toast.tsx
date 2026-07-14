"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";

type ToastProps = {
  id: string;
  type: "success" | "error";
  message: string;
  onDismiss: (id: string) => void;
};

export function Toast({ id, type, message, onDismiss }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(id), 3500);
    return () => clearTimeout(timer);
  }, [id, onDismiss]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.22 }}
      className={`flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg border text-sm font-medium max-w-xs ${
        type === "success"
          ? "bg-[#ECFDF5] border-[#10B981]/30 text-[#065F46]"
          : "bg-[#FEF2F2] border-[#EF4444]/30 text-[#991B1B]"
      }`}
    >
      {type === "success" ? (
        <CheckCircle size={17} className="text-[#10B981] flex-shrink-0" />
      ) : (
        <XCircle size={17} className="text-[#EF4444] flex-shrink-0" />
      )}
      <span className="flex-1">{message}</span>
      <button
        onClick={() => onDismiss(id)}
        className="text-current opacity-50 hover:opacity-100 transition-opacity"
      >
        <X size={14} />
      </button>
    </motion.div>
  );
}

type ToastItem = { id: string; type: "success" | "error"; message: string };

type ToastContainerProps = {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
};

export function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 items-end pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((t) => (
          <div key={t.id} className="pointer-events-auto">
            <Toast {...t} onDismiss={onDismiss} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const addToast = (type: "success" | "error", message: string) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, type, message }]);
  };

  const dismiss = (id: string) =>
    setToasts((prev) => prev.filter((t) => t.id !== id));

  return { toasts, addToast, dismiss };
}
