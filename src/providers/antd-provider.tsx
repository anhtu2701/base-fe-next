'use client';

import { App as AntdApp, ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import viVN from 'antd/locale/vi_VN';
import type { PropsWithChildren } from '@/interfaces';

export function AntdProvider({ children }: PropsWithChildren) {
  return (
    <AntdRegistry>
      <ConfigProvider
        locale={viVN}
        theme={{
          token: {
            colorPrimary: '#1677ff',
            borderRadius: 6,
          },
          components: {
            Layout: {
              headerBg: '#ffffff',
              siderBg: '#ffffff',
            },
          },
        }}
      >
        <AntdApp>{children}</AntdApp>
      </ConfigProvider>
    </AntdRegistry>
  );
}

