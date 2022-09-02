import Head from 'next/head';
import { Container, IntroBody, IntroHeader } from '../../src/components';

function WalletPage() {
  return (
    <>
    <Head>
        <title>Safient- Non-custodial secret Recovery and Inheritance Protocol</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='description' content='Recover and Inherit digital secrets in a non-custodial way with security and convenience' />
        <meta property="og:type" content="website"/><meta property="og:url" content="https://safient.io"/>
        <meta property="og:title" content="Safient- Non-custodial secret Recovery and Inheritance Protocol" />
        <meta property="og:site_name" content="Safient"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://safient.io/intro"/>
        <meta property="twitter:title" content="Safient- Non-custodial secret Recovery and Inheritance Protocol"/>
        <meta property="twitter:description" content="Recover and Inherit digital secrets in a non-custodial way with security and convenience"/>
        <meta property="twitter:image" content="https://safient.io/preview.jpg"/>
        <meta name="next-head-count" content="17"/>
    <meta
      property="og:image"
      content="https://safient.io/preview.jpg"
    />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
          integrity='sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=='
          crossOrigin='anonymous'
          referrerpolicy='no-referrer'
        />
      </Head>
    <Container>
      <IntroHeader />
      <IntroBody />
    </Container>
    </>
  );
}

export default WalletPage;
