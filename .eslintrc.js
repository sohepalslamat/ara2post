/* eslint-disable */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    babel: {
      presets ({ isServer }) {
        return [
          [
            require.resolve('@vue/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/recommended'
  ],
  // add your custom rules here
  rules: {
  }
}
