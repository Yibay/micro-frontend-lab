const isProd = process.env.NODE_ENV === 'production';

const hostMap = {
  subVueVite: isProd ? '//sub-vue-vite.example.com' : '//localhost:7101',
  subVanilla: isProd ? '//sub-vanilla.example.com' : '//localhost:7102',
  subReactVite: isProd ? '//sub-react-vite.example.com' : '//localhost:7103',
  subUmiReact: isProd ? '//sub-umi-react.example.com' : '//localhost:8001',
};

export default hostMap;