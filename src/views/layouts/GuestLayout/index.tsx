"use client";

import GuestHeader from "@/views/layouts/headers/GuestHeader";
import Sidebar from "@/views/shared/Sidebar";

type Props = {
  children: React.ReactNode;
};

const GuestLayout = ({ children }: Props) => {
  return (
    <div className="layout">
      <GuestHeader />
      <main className="page__main">
        <Sidebar />
        <section>{children}</section>
      </main>
    </div>
  );
};

export default GuestLayout;
