/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',               // Gera HTML estático (Obrigatório para GitHub Pages)
  basePath: '/Inatel2',           // Define a pasta base (Obrigatório pois seu site não está na raiz do domínio)
  images: {
    unoptimized: true,            // Necessário para imagens funcionarem no modo estático
  },
};

export default nextConfig;