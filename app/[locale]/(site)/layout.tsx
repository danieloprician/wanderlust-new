import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
