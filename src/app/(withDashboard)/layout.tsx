import DashboardSidebar from "@/components/Sheard/DashboardSidebar/Sidebar";
import { ReactNode } from "react";

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
