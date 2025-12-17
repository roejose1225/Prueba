import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-800">{children}</body>
    </html>
  );
}
