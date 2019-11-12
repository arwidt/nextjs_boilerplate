import React, { useState } from 'react';
import App from 'next/app';
import Store from 'global/store/Store';

import NProgress from 'nprogress';
import Router from 'next/router';

const startProgress = () => NProgress.start();
const stopProgress = timer => {
  clearTimeout(timer);
  NProgress.done();
};

const showProgressBar = delay => {
  const timer = setTimeout(startProgress, delay);
  Router.events.on('routeChangeComplete', () => stopProgress(timer));
  Router.events.on('routeChangeError', () => stopProgress(timer));
};

Router.events.on('routeChangeStart', () => showProgressBar(300));

const MainApp = class MainApp extends App {

  constructor(props) {
    super(props);
    if (!Store.isInited) {
      Store.init();
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Component {...pageProps} />
    );
  }
}

export default MainApp;
