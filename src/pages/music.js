import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';

const MusicPage = () => {
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

export default MusicPage;

MusicPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}