import { defineConfig } from 'umi'

export default defineConfig({
  mfsu: {},
  fastRefresh: {},
  routes: [{ path: '/', component: '@/pages/index' }],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  extraPostCSSPlugins: [
    // eslint-disable-next-line
    // require('postcss-import'),
    // eslint-disable-next-line
    require('tailwindcss'),
    // eslint-disable-next-line
    require('autoprefixer'),
  ],
})
