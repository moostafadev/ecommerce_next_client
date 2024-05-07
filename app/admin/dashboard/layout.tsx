import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Coursat Academy",
  description: "Admin page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container">{children}</div>;
}
