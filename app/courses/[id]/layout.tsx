import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coursat | Course",
  description: "One course page",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container">{children}</div>;
}
