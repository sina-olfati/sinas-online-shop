// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

// Create the base config (you can add more options here as needed)
const nextConfig = {
  // Example:
  // reactStrictMode: true,
};

// Integrate Next Intl Plugin
const withNextIntl = createNextIntlPlugin();

// Export the combined config
export default withNextIntl(nextConfig);
