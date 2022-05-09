import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Navbar } from './src/components/common/navbar/navbar.component';

import { Hero } from './src/components/hero/hero.component';

import { WhySection } from './src/components/why-section/why-section.component';
import { TechStack } from './src/components/tech-stack/tech-stack.component';
import { JoinCommunity } from './src/components/join-community/join-community.component';
import { Features } from './src/components/features/features.component';
import { Faq } from './src/components/faq/faq.component';
import { RoadMap } from './src/components/roadmap/roadmap.component';
import { HowItWorks } from './src/components/how/how.component';

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
      <Features />
      <WhySection />
      <HowItWorks />
      <TechStack />

      <RoadMap />
      <JoinCommunity />
      <Faq />
    </div>
  );
}
