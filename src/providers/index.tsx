import React from "react";

import ClientProviders from "./client-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ClientProviders>{children}</ClientProviders>;
};

export default Providers;
