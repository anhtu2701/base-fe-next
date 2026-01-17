'use client';

import { ReduxProvider } from './redux-provider';
import { TanstackProvider } from './tanstack-provider';
import { AntdProvider } from './antd-provider';
import { ErrorBoundary } from '@/components';
import type { PropsWithChildren } from '@/interfaces';

export function ClientWrapper({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary>
      <ReduxProvider>
        <TanstackProvider>
          <AntdProvider>{children}</AntdProvider>
        </TanstackProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
}

