import { AppProps } from 'next/app';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '../common/reducer';
import { useStylesGlobal } from '../styles/_app.style';

interface ILayoutProps {
  children: React.ReactNode;
}

function SafeHydrate({ children }: ILayoutProps) {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
}

function StoredApp({ Component, pageProps }: AppProps) {
  useStylesGlobal();

  return (
    <StoreProvider store={store}>
      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
    </StoreProvider>
  );
}

export default StoredApp;
