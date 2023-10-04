import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  routes: [{
    path: '/',
    component: '@layout/MainLayout.astro'
  }, {
    path: '/#',
    component: './src/components/home/Home.astro'
  }, {
    path: '/about',
    component: './src/components/about/About.astro'
  }]
});