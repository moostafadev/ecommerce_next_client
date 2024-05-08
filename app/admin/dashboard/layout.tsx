import HeaderDashboard from "@/components/HeaderDashboard";
import { checkRole } from "@/utils/roles";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin | Coursat Academy",
  description: "Admin page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!checkRole("admin")) {
    redirect("/");
  }

  return (
    <div>
      <HeaderDashboard />
      <div className="px-4 md:pr-[320px] py-4 mt-16">{children}</div>
    </div>
  );
}
