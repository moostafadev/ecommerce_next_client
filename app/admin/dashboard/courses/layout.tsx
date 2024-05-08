import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Courses | Coursat Academy",
  description: "Admin courses page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
