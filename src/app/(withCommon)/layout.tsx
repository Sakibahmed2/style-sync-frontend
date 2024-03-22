import Footer from "@/components/Sheard/Footer/Footer";
import Navbar from "@/components/Sheard/Navbar/Navbar";
import ResponsiveNavbar from "@/components/Sheard/ResponiveNavbar/ResponsiveNavbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ResponsiveNavbar />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
