import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';

const PagesPage = () => {
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="facebook" description="Social Media Website"/>
      </Head>
      <div>
        
      </div>
    </div>
  );
};

export default PagesPage;

PagesPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}