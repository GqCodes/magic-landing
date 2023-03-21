import Head from 'next/head';
import MainLayout from '@/components/layouts/MainLayout';
import Hero from '@/components/Hero/Hero/';
import Collection2 from '@/components/Collections/Collection2';
import Collection3 from '@/components/Collections/Collection3';
import Cards from '@/components/Cards/Cards';
import Grid from '@/components/Grid/Grid';
import Logos from '@/components/Logos/Logos';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Orlando Magic Landing Page</title>
        <meta name='description' content='Orlando Magic Landing Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Hero />
      <Grid />
      <Cards />
      <Logos />
      <Collection2 />
      <Collection3 />
    </MainLayout>
  );
}
