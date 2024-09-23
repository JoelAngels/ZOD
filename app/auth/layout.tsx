import React from "react";
// This layout is all for children that are under the auth folder, all components
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full">
      <div className="h-screen flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
