'use client';

import React from 'react';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { theme } from '@/config/theme';

type Props = {
  children: React.ReactNode;
};

const Provider: React.FC<Props> = (props) => {
  const { children } = props;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchInterval: 0,
        retry: 3,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} withCssVariables>
        {children}
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Provider;
