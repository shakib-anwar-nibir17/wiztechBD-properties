import { toast as sonnerToast } from "sonner";

type ToastOptions = {
  duration?: number;
};

export const toast = {
  success: (message: string, options?: ToastOptions) => {
    sonnerToast.success(message, {
      className: "!bg-green-50 !text-green-800 !border-green-200",
      duration: options?.duration,
    });
  },
  error: (message: string, options?: ToastOptions) => {
    sonnerToast.error(message, {
      className: "!bg-red-50 !text-red-800 !border-red-200",
      duration: options?.duration,
    });
  },
  info: (message: string, options?: ToastOptions) => {
    sonnerToast.message(message, {
      className: "!bg-blue-50 !text-blue-800 !border-blue-200",
      duration: options?.duration,
    });
  },
  warning: (message: string, options?: ToastOptions) => {
    sonnerToast.message(message, {
      className: "!bg-yellow-50 !text-yellow-800 !border-yellow-200",
      duration: options?.duration,
    });
  },
};
