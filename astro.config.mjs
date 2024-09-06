import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false
        })
    ],
    output: 'hybrid',
    adapter: netlify({
        cacheOnDemandPages: true,
        edgeMiddleware: true,
        imageCDN: true
    }),
    image: {
        domains: ['res.cloudinary.com', 'paulapplegate.com']
    }
});