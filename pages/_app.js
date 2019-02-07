import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
            <title>NNJA.tech - Blog</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
            <link href="https://fonts.googleapis.com/css?family=Major+Mono+Display|Overpass+Mono" rel="stylesheet"/>
        </Head>

        <Component {...pageProps} />
      </Container>
    );
  }
}
