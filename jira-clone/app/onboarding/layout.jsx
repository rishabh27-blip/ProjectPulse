import React, { FC } from "react";

const Layout = ({ children }) => {
  return (
    <main className="container mx-auto mt-6 px-6 max-w-screen-lg">
      {children}
    </main>
  );
};

export default Layout;
