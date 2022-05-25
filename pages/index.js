import Head from 'next/head';
import {
  Faq,
  Features,
  Hero,
  HowItWorks,
  JoinCommunity,
  RoadMap,
  WhySection,
  TechStack,
  DeveloperResources,
  ProductSection,
} from '../src/components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Safient Safes</title>
        <meta name='description' content='Portfolio 2.0' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
          integrity='sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=='
          crossOrigin='anonymous'
          referrerpolicy='no-referrer'
        />
      </Head>

      <Hero />
      <WhySection />
      <Features />
      {/* <HowItWorks /> */}
      <ProductSection />
      <TechStack />

      <DeveloperResources />
      {/* <RoadMap /> */}
      <JoinCommunity />
      {/* <Faq /> */}
    </div>
  );
}
