module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    test: {
      presets: ['@babel/preset-env'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@store': './src/store',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@styles': './src/styles',
        },
      },
    ],
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    ['react-native-reanimated/plugin'],
  ],
}
