import "../globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Auth Layout Rendered");
  
  return (
    <html lang="en">
    <body>{children}</body>
  </html>
  )
}
