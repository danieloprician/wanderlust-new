import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SiteLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
