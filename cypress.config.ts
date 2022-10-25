import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1080,
    reporter: 'list',
    numTestsKeptInMemory: 5,
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },

  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    requestTimeout: 30000,
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 2,
      openMode: 0
    }
  },
});
