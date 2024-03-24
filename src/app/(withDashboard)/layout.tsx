import DashboardSidebar from "@/components/Sheard/DashboardSidebar/Sidebar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Style sync | Dashboard",
  description: "Welcome to style sync cloth brand",
};

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="grid grid-cols-12 ">
        <DashboardSidebar />

        <div className="col-span-10 h-full px-5">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
