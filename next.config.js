/** @type {import('next').NextConfig} */
    const nextConfig = {
      images: {
        domains: [
          'peisyeydodamejrdzobi.supabase.co'
        ],
      },
      compiler: {
        styledComponents: true
      },
      webpack: (config) => {
        // Disable SWC in favor of Babel
        config.module.rules.push({
          test: /\.(js|jsx|ts|tsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['next/babel'],
              plugins: []
            }
          }
        })
        return config
      }
    }

    module.exports = nextConfig
