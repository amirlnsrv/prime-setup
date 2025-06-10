import React, { ReactNode } from "react";
import { AdminHeader } from "./components/AdminHeader";
import "@/styles/globals.scss";
interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <html>
      <body>
        <AdminHeader />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default AdminLayout;
