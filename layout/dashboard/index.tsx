import React, { ReactNode } from 'react';
import { Footer } from "@/components/footer/footer"
import { Header } from "@/components/header/header";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
  };

export default DashboardLayout;