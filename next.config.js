/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const plugin = require('tailwindcss');

const nextConfig = {
    ...withPWA({
        dest: 'public',
        register: true,
        skipWaiting: true,
        //disable: process.env.NODE_ENV === 'development',
    })
}

module.exports = nextConfig
