import React from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "./theme";

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "white",
            border: "1px solid #e5e7eb",
            color: "#374151",
          },
          classNames: {
            success: "bg-green-50 border-green-200 text-green-800",
            error: "bg-red-50 border-red-200 text-red-800",
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
};

export default ClientProviders;
