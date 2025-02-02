import { ReactNode } from 'react';
import { ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import '@/assets/css/globals.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';

import { PublicEnvScript } from 'next-runtime-env';

import '@fontsource/figtree';
import '@fontsource/figtree/500.css';
import '@fontsource/figtree/700.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import Provider from '@/provider/Provider';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const Layout: React.FC<Props> = async (props) => {
  const {
    children,
    params: { locale },
  } = props;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <PublicEnvScript />
        <ColorSchemeScript />
        <title>Demo System</title>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Provider>
            <Notifications />
            {children}
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default Layout;
