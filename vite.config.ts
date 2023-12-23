import path from 'path';
import { defineConfig } from 'vite';
import viteSvgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@common': path.resolve(__dirname, './src/common/'),
      '@screens': path.resolve(__dirname, './src/screens/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@themes': path.resolve(__dirname, './src/themes/'),
      '@services': path.resolve(__dirname, './src/services/'),
      '@config': path.resolve(__dirname, './src/config/'),
      '@contexts': path.resolve(__dirname, './src/contexts/'),
    },
  },
  plugins: [react(), viteSvgr()],
});
