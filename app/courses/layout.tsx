import { BreadcrumbDemo } from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | Coursat Academy",
  description: "Courses page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container">{children}</div>;
}
