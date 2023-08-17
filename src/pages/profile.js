import RootLayout from '@/components/Layouts/RootLayout';
import ProfileCard from '@/components/Profile/ProfileCard';
import ProfileTab from '@/components/Profile/ProfileTab';
import Head from 'next/head';

const ProfilePage = () => {
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="facebook" description="Social Media Website"/>
      </Head>
      <div>

        <ProfileCard/>

        <ProfileTab/>
       
      </div>
    </div>
  );
};

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}