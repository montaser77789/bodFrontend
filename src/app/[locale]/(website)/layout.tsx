import Footer from "@/components/Footer";
import Header from "@/components/header";


export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main >{children}</main>
      <Footer />
    </>
  );
}
