// https://umijs.org/config/
import { pageRoutes } from './router';

const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
        immer: true,
      },
      locale: {
        enable: false, // default false
        default: 'zh-CN', // default zh-CN
        baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
      },
      dynamicImport: {
        // loadingComponent: './components/LoadingIndicator',
        webpackChunkName: true,
        level: 3,
      },
    },
  ],
];

export default {
  // add for transfer to umi
  plugins,

  treeShaking: true,

  routes: pageRoutes,

  outputPath: './build',
  hash: true,
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  extraBabelPlugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
};
