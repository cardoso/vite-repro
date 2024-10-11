import { defineConfig } from 'vite';

import lwc from '@lwc/rollup-plugin';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
        lwc({
                modules: [{ dir: 'src/modules' }],
                include: /src\/modules/
        }),
  ]
});
