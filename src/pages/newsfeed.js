import NewsFeed from '@/components/Dashboard/NewsFeed';
import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';

const NewsFeedPage = () => {
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="facebook" description="Social Media Website"/>
      </Head>
      <div>
        <NewsFeed/>
      </div>
    </div>
  );
};

export default NewsFeedPage;

NewsFeedPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}