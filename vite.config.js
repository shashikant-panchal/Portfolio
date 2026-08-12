import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        open: true,
    },
    build: {
        target: 'esnext',
        chunkSizeWarningLimit: 1200,
        // Split vendor, 3D, and animation libraries into dedicated chunks so the initial HTML paints fast.
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    three: ['three'],
                    r3f: ['@react-three/fiber', '@react-three/drei'],
                    motion: ['framer-motion'],
                    icons: ['lucide-react'],
                },
            },
        },
    },
});
