import { MicroappNextFederationPlugin } from '@microapp-io/scripts';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, options) => {
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    if (!options.isServer) {
      config.plugins.push(new MicroappNextFederationPlugin());
    }
    return config;
  }
};

export default nextConfig;