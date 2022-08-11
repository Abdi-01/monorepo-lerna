module.exports = {
    apps: [
      {
        name: 'lerna-test-api.purwadhikabootcamp.com',
        script: './index.js',
        env: {
          NODE_ENV: 'production',
          PORT: 2020,
        },
        time: true,
      },
    ],
  };