import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
/* import { resolve} from 'path';

const root = resolve(__dirname, 'src');

const alias = {
  '@': resolve(root),
  '@/components': resolve(root, 'core', 'ui', 'components'),
  '@/ui': resolve(root, 'core', 'ui'),
  '@/core': resolve(root, 'core'),
};

(() => {
  console.log(alias);
})(); */

// EQUIVALENT TS CONFIGURATION NOT WORKING

/*
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["./src/core/ui/components/*"],
      "@/ui/*": ["./src/core/ui/*"],
      "@/core/*": ["./src/core/*"],
      "@/*": ["./src/*"]
    }
*/

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@': resolve(root),
  //     '@/components': resolve(root, 'core', 'ui', 'components'),
  //     '@/ui': resolve(root, 'core', 'ui'),
  //     '@/core': resolve(root, 'core'),
  //   },
  // },
});
