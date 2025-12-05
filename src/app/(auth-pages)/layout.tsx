interface AuthPagesLayoutProps {
  children: React.ReactNode;
}

const AuthPagesLayout = ({ children }: AuthPagesLayoutProps) => {
  return (
    <main className="px-[72px] py-14  min-h-screen overflow-hidden flex flex-col">
      {/* Hidden SVG for clip-path definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="authClip" clipPathUnits="objectBoundingBox">
            <path d="M1 0.826 C1 0.864 0.964 0.895 0.919 0.895 H0.897 C0.863 0.895 0.836 0.919 0.836 0.948 C0.836 0.977 0.808 1 0.775 1 H0.081 C0.036 1 0 0.969 0 0.931 V0.182 C0 0.144 0.036 0.113 0.081 0.113 H0.096 C0.133 0.113 0.162 0.088 0.162 0.057 C0.162 0.025 0.192 0 0.229 0 H0.919 C0.964 0 1 0.031 1 0.069 V0.826Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-[1440px] w-full mx-auto flex flex-1">
        <div className="w-[45%]">{children}</div>
        <div className="w-[55%] relative clip-auth">
          <div className="absolute top-10 w-[68%] right-4 text-white text-right">
            <h1 className="text-2xl font-semibold font-silka">
              Browse thousands of properties to buy, sell, or rent with trusted
              agents.
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthPagesLayout;
